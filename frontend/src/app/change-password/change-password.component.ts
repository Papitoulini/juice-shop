/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type AbstractControl, UntypedFormControl, Validators } from '@angular/forms'
import { UserService } from '../Services/user.service'
import { Component } from '@angular/core'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { FormSubmitService } from '../Services/form-submit.service'
import { TranslateService } from '@ngx-translate/core'

library.add(faSave, faEdit)

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  public passwordControl: UntypedFormControl = new UntypedFormControl('', [Validators.required])
  public newPasswordControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)])
  public repeatNewPasswordControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40), matchValidator(this.newPasswordControl)])
  public error: string | null = null
  public confirmation: string = ''

  constructor (private readonly userService: UserService, private readonly formSubmitService: FormSubmitService, private readonly translate: TranslateService) { }