/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { UserService } from '../Services/user.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { ChangePasswordComponent } from './change-password.component'
import { ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { of, throwError } from 'rxjs'

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent
  let fixture: ComponentFixture<ChangePasswordComponent>
  let userService: jasmine.SpyObj<UserService>

  beforeEach(waitForAsync(() => {
    userService = jasmine.createSpyObj('UserService', ['changePassword'])