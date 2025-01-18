/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { of, throwError } from 'rxjs'
import { RouterTestingModule } from '@angular/router/testing'
import { MatGridListModule } from '@angular/material/grid-list'
import { WalletComponent } from './wallet.component'
import { WalletService } from '../Services/wallet.service'
import { EventEmitter } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

describe('WalletComponent', () => {
  let component: WalletComponent
  let fixture: ComponentFixture<WalletComponent>
  let walletService
  let translateService
  let snackBar: MatSnackBar

  beforeEach(waitForAsync(() => {
    walletService = jasmine.createSpyObj('AddressService', ['get', 'put'])