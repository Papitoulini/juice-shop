/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { OAuthComponent } from './oauth.component'
import { LoginComponent } from '../login/login.component'
import { ReactiveFormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { MatTooltipModule } from '@angular/material/tooltip'
import { of, throwError } from 'rxjs'
import { UserService } from '../Services/user.service'
import { CookieModule } from 'ngx-cookie'

describe('OAuthComponent', () => {
         let component: OAuthComponent
         let fixture: ComponentFixture<OAuthComponent>
         let userService: UserService

         beforeEach(waitForAsync(() => {
           userService = jasmine.createSpyObj('UserService', ['oauthLogin', 'login', 'save'])