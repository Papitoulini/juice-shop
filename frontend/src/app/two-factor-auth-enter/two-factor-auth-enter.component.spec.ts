/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { TwoFactorAuthEnterComponent } from './two-factor-auth-enter.component'
import { SearchResultComponent } from '../search-result/search-result.component'
import { UserService } from '../Services/user.service'
import { WindowRefService } from '../Services/window-ref.service'

import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { TranslateModule } from '@ngx-translate/core'
import { CookieModule, CookieService } from 'ngx-cookie'

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
import { MatGridListModule } from '@angular/material/grid-list'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatTooltipModule } from '@angular/material/tooltip'

import { of } from 'rxjs'
import { TwoFactorAuthService } from '../Services/two-factor-auth-service'

describe('TwoFactorAuthEnterComponent', () => {
TypeScript
let component: TwoFactorAuthEnterComponent;
let fixture: ComponentFixture<TwoFactorAuthEnterComponent>;
let cookieService: CookieService;
let userService: UserService;
let twoFactorAuthService: TwoFactorAuthService | undefined;