/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { environment } from '../../environments/environment'
import { ComplaintService } from '../Services/complaint.service'
import { UserService } from '../Services/user.service'
import { Component, ElementRef, type OnInit, ViewChild } from '@angular/core'
import { UntypedFormControl, Validators } from '@angular/forms'
import { FileUploader } from 'ng2-file-upload'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { FormSubmitService } from '../Services/form-submit.service'
import { TranslateService } from '@ngx-translate/core'

library.add(faBomb)

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {
  public customerControl: UntypedFormControl = new UntypedFormControl({ value: '', disabled: true }, [])
  public messageControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.maxLength(160)])
  @ViewChild('fileControl', { static: true }) fileControl!: ElementRef // For controlling the DOM Element for file input.
  public fileUploadError: string | undefined = undefined // For controlling error handling related to file input.
  public uploader: FileUploader = new FileUploader({
    url: environment.hostServer + '/file-upload',
    authToken: `Bearer ${localStorage.getItem('token')}`,
export type BaseException = Record<string, any>;