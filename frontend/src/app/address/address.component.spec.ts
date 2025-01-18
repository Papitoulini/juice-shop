/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { AddressComponent } from './address.component'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { of, throwError } from 'rxjs'
import { RouterTestingModule } from '@angular/router/testing'
import { AddressService } from '../Services/address.service'
import { AddressCreateComponent } from '../address-create/address-create.component'
import { MatTableModule } from '@angular/material/table'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'
import { MatRadioModule } from '@angular/material/radio'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSnackBar } from '@angular/material/snack-bar'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { EventEmitter } from '@angular/core'
import { DeliveryMethodComponent } from '../delivery-method/delivery-method.component'

describe('AddressComponent', () => {
  let component: AddressComponent
  let fixture: ComponentFixture<AddressComponent>
  let addressService
  let snackBar: MatSnackBar
  let translateService

  beforeEach(waitForAsync(() => {