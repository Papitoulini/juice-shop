/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { CookieModule, CookieService } from 'ngx-cookie'

import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'

import { WelcomeBannerComponent } from './welcome-banner.component'
import { MatDialogRef } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { of, throwError } from 'rxjs'
import { ConfigurationService } from '../Services/configuration.service'

describe('WelcomeBannerComponent', () => {
  let component: WelcomeBannerComponent
  let fixture: ComponentFixture<WelcomeBannerComponent>
  let cookieService: any
  let matDialogRef: MatDialogRef<WelcomeBannerComponent>
  let configurationService: ConfigurationService

  beforeEach(waitForAsync(() => {
    configurationService = jasmine.createSpyObj('ConfigurationService', ['getApplicationConfiguration'])