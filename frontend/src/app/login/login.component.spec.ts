/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { SearchResultComponent } from '../search-result/search-result.component'
import { WindowRefService } from '../Services/window-ref.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UserService } from '../Services/user.service'
import { type ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing'
import { LoginComponent } from './login.component'
import { RouterTestingModule } from '@angular/router/testing'
import { ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { CookieModule, CookieService } from 'ngx-cookie'
import { Location } from '@angular/common'
import { of, throwError } from 'rxjs'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { TranslateModule } from '@ngx-translate/core'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatTooltipModule } from '@angular/material/tooltip'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>
  let userService: UserService
  let location: Location

  beforeEach(waitForAsync(() => {