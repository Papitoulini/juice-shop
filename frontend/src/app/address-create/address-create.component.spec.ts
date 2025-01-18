/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { AddressCreateComponent } from './address-create.component'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { of, throwError } from 'rxjs'
import { RouterTestingModule } from '@angular/router/testing'
import { AddressService } from '../Services/address.service'
import { MatGridListModule } from '@angular/material/grid-list'
import { EventEmitter } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

describe('AddressCreateComponent', () => {
  let component: AddressCreateComponent
  let fixture: ComponentFixture<AddressCreateComponent>
  let addressService
  let translateService
  let snackBar: MatSnackBar

  beforeEach(waitForAsync(() => {
    addressService = jasmine.createSpyObj('AddressService', ['getById', 'put', 'save'])