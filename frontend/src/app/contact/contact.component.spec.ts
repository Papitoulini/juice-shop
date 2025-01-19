/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { CaptchaService } from '../Services/captcha.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UserService } from '../Services/user.service'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { EventEmitter } from '@angular/core'
import { ContactComponent } from './contact.component'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FeedbackService } from '../Services/feedback.service'
import { MatSliderModule } from '@angular/material/slider'
import { of, throwError } from 'rxjs'

describe('ContactComponent', () => {
let component: ContactComponent
let fixture: ComponentFixture<ContactComponent>;
let userService: UserService;
let feedbackService: FeedbackService;
let captchaService: CaptchaService;
let snackBar: MatSnackBar;