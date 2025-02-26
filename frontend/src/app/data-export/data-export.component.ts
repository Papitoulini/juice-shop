/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, OnInit } from '@angular/core'
import { FormControl, Validators } from '@angular/forms'
import { ImageCaptchaService } from '../Services/image-captcha.service'
import { DataSubjectService } from '../Services/data-subject.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

interface CaptchaResponse {
  image: string
}

interface DataExportRequest {
  answer?: string
  format: string
}

interface DataExportResponse {
  confirmation: string
  userData: string
}

interface ErrorResponse {
  error: string
}

@Component({
  selector: 'app-data-export',
  templateUrl: './data-export.component.html',
  styleUrls: ['./data-export.component.scss']
})
export class DataExportComponent implements OnInit {
  public captchaControl: FormControl = new FormControl('', [Validators.required, Validators.minLength(5)])
  public formatControl: FormControl = new FormControl('', [Validators.required])
  public captcha: SafeHtml | null = null
  private dataRequest: DataExportRequest = { format: '' }
  public confirmation: string | null = null
  public error: string | null = null
  public lastSuccessfulTry: Date | null = null
  public presenceOfCaptcha: boolean = false
  public userData: string | null = null

  constructor(
    public sanitizer: DomSanitizer,
    private readonly imageCaptchaService: ImageCaptchaService,
    private readonly dataSubjectService: DataSubjectService
  ) { }

  ngOnInit() {
    this.needCaptcha()
    this.dataRequest = { format: '' }
  }

  needCaptcha() {
    const nowTime = new Date()
    const timeOfCaptcha = localStorage.getItem('lstdtxprt') ? new Date(JSON.parse(String(localStorage.getItem('lstdtxprt')))) : new Date(0)
    if (nowTime.getTime() - timeOfCaptcha.getTime() < 300000) { // 5 minutes in milliseconds
      this.getNewCaptcha()
      this.presenceOfCaptcha = true
    }
  }

  getNewCaptcha() {
    this.imageCaptchaService.getCaptcha().subscribe(
      (data: CaptchaResponse) => {
        this.captcha = this.sanitizer.bypassSecurityTrustHtml(data.image)
      },
      (error: ErrorResponse) => {
        this.error = error.error
        console.log(this.error)
      }
    )
  }

  save() {
    if (this.presenceOfCaptcha) {
      this.dataRequest.answer = this.captchaControl.value
    }
    this.dataRequest.format = this.formatControl.value
    this.dataSubjectService.dataExport(this.dataRequest).subscribe(
      (data: DataExportResponse) => {
        this.error = null
        this.confirmation = data.confirmation
        this.userData = data.userData
        window.open('', '_blank', 'width=500')?.document.write(this.userData)
        this.lastSuccessfulTry = new Date()
        localStorage.setItem('lstdtxprt', JSON.stringify(this.lastSuccessfulTry))
        this.ngOnInit()
        this.resetForm()
      },
      (error: ErrorResponse) => {
        this.error = error.error
        this.confirmation = null
        this.resetFormError()
      }
    )
  }

  resetForm() {
    this.captchaControl.markAsUntouched()
    this.captchaControl.markAsPristine()
    this.captchaControl.setValue('')
    this.formatControl.markAsUntouched()
    this.formatControl.markAsPristine()
    this.formatControl.setValue('')
  }

  resetFormError() {
    this.captchaControl.markAsUntouched()
    this.captchaControl.markAsPristine()
    this.captchaControl.setValue('')
  }
}
