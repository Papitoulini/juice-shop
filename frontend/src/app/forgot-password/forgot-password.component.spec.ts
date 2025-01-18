/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { type ComponentFixture, fakeAsync, flush, TestBed, tick, waitForAsync } from '@angular/core/testing'
import { ForgotPasswordComponent } from './forgot-password.component'
import { SecurityQuestionService } from '../Services/security-question.service'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { UserService } from 'src/app/Services/user.service'
import { of, throwError } from 'rxjs'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatIconModule } from '@angular/material/icon'
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent
  let fixture: ComponentFixture<ForgotPasswordComponent>
  let securityQuestionService: SecurityQuestionService
  let userService: UserService

  beforeEach(waitForAsync(() => {