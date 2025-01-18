/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { FeedbackService } from '../Services/feedback.service'
import { CaptchaService } from '../Services/captcha.service'
import { UserService } from '../Services/user.service'
import { UntypedFormControl, Validators } from '@angular/forms'
import { Component, type OnInit } from '@angular/core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane, faStar } from '@fortawesome/free-solid-svg-icons'
import { FormSubmitService } from '../Services/form-submit.service'
import { TranslateService } from '@ngx-translate/core'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'

library.add(faStar, faPaperPlane)

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public authorControl: UntypedFormControl = new UntypedFormControl({ value: '', disabled: true }, [])
  public feedbackControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.maxLength(160)])
  public captchaControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.pattern('-?[\\d]*')])
  public userIdControl: UntypedFormControl = new UntypedFormControl('', [])
  public rating: number = 0
  public feedback: string | undefined = undefined
  public captcha: string | undefined
  public captchaId: string
  public confirmation: boolean