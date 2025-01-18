/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { of } from 'rxjs'
import { RouterTestingModule } from '@angular/router/testing'
import { DeluxeUserComponent } from './deluxe-user.component'
import { UserService } from '../Services/user.service'
import { CookieService } from 'ngx-cookie'
import { LoginComponent } from '../login/login.component'
import { Location } from '@angular/common'
import { MatTableModule } from '@angular/material/table'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'
import { MatRadioModule } from '@angular/material/radio'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTooltipModule } from '@angular/material/tooltip'
import { ConfigurationService } from '../Services/configuration.service'
import { throwError } from 'rxjs/internal/observable/throwError'

describe('DeluxeUserComponent', () => {
  let component: DeluxeUserComponent
  let fixture: ComponentFixture<DeluxeUserComponent>
  let userService: any
  let cookieService: CookieService
  let configurationService: ConfigurationService

  beforeEach(waitForAsync(() => {