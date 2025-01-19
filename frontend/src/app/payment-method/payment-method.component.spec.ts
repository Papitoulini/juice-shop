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
import { MatTableModule } from '@angular/material/table'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'
import { MatRadioModule } from '@angular/material/radio'
import { PaymentService } from '../Services/payment.service'
import { MatDialogModule } from '@angular/material/dialog'
import { PaymentMethodComponent } from './payment-method.component'
import { EventEmitter } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

describe('PaymentMethodComponent', () => {
  let component: PaymentMethodComponent
  let fixture: ComponentFixture<PaymentMethodComponent>
         let paymentService
         let translateService
         let snackBar: Snackbar

         beforeEach(waitForAsync(() => {
           paymentService = jasmine.createSpyObj('BasketService', ['save', 'get', 'del'])