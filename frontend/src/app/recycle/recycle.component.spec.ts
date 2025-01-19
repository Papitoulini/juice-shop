/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { ConfigurationService } from '../Services/configuration.service'
import { UserService } from '../Services/user.service'
import { RecycleService } from '../Services/recycle.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatCardModule } from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'

import { RecycleComponent } from './recycle.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatNativeDateModule } from '@angular/material/core'
import { of, throwError } from 'rxjs'
import { AddressComponent } from '../address/address.component'
import { RouterTestingModule } from '@angular/router/testing'
import { EventEmitter } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatRadioModule } from '@angular/material/radio'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatSnackBar } from '@angular/material/snack-bar'

describe('RecycleComponent', () => {
let component: RecycleComponent
let fixture: ComponentFixture<RecycleComponent>;
let recycleService: RecycleService;
let userService: UserService;
let configurationService: ConfigurationService = new ConfigurationService();
let translateService: TranslateService = new TranslateService();