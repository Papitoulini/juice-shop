/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { TwoFactorAuthComponent } from './two-factor-auth.component'

import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { TranslateModule } from '@ngx-translate/core'

import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTooltipModule } from '@angular/material/tooltip'

import { QRCodeModule } from 'anuglar2-qrcode'
import { of } from 'rxjs'
import { ConfigurationService } from '../Services/configuration.service'
import { TwoFactorAuthService } from '../Services/two-factor-auth-service'
import { throwError } from 'rxjs/internal/observable/throwError'

describe('TwoFactorAuthComponent', () => {
         let component: TwoFactorAuthComponent
let fixture: ComponentFixture<TwoFactorAuthComponent>;
let twoFactorAuthService: TwoFactorAuthService;
let configurationService: ConfigurationService;

beforeEach(waitForAsync(() => {