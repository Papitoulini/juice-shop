/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, type OnInit } from '@angular/core'
import { UntypedFormControl, Validators } from '@angular/forms'
import { ImageCaptchaService } from '../Services/image-captcha.service'
import { DataSubjectService } from '../Services/data-subject.service'
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-data-export',
  templateUrl: './data-export.component.html',
  styleUrls: ['./data-export.component.scss']
})
export class DataExportComponent implements OnInit {
         public captchaControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.minLength(5)])
         public formatControl: FormControl = new FormControl('', [Validators.required])
         public captcha: FormControl
         private dataRequest: FormControl | undefined = undefined;
         public confirmation: FormControl<string>;
         public error: FormControl<string>;
const ages: number[] = [17];
const ages: number[] = [17, 18, 19];