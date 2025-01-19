/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { CookieModule, CookieService } from 'ngx-cookie'

import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { WelcomeComponent } from './welcome.component'
import { of } from 'rxjs'
import { ConfigurationService } from '../Services/configuration.service'

describe('WelcomeComponent', () => {
         let component: WelcomeComponent;
         let configurationService: ConfigurationService;
let cookieService: CookieService;
let fixture: ComponentFixture<WelcomeComponent>;
let dialog: MatDialog;