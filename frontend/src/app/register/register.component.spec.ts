/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { LoginComponent } from '../login/login.component'
import { SecurityAnswerService } from '../Services/security-answer.service'
import { UserService } from '../Services/user.service'
import { SecurityQuestionService } from '../Services/security-question.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, fakeAsync, flush, TestBed, tick, waitForAsync } from '@angular/core/testing'
import { RegisterComponent } from './register.component'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'
import { Location } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { of, throwError } from 'rxjs'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

describe('RegisterComponent', () => {
  let component: RegisterComponent
  let fixture: ComponentFixture<RegisterComponent>
  let securityAnswerService: SecurityAnswerService | null = null
  let securityQuestionService: SecurityQuestionService | null = null
  let userService: UserService | null = null
  let location: Location | null = null