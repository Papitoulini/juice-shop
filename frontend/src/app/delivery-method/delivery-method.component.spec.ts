/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { MatInputModule } from '@angular/material/input'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { RouterTestingModule } from '@angular/router/testing'
import { AddressService } from '../Services/address.service'
import { of } from 'rxjs/internal/observable/of'
import { throwError } from 'rxjs'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { DeliveryService } from '../Services/delivery.service'
import { DeliveryMethodComponent } from './delivery-method.component'
import { PaymentComponent } from '../payment/payment.component'
import { PaymentMethodComponent } from '../payment-method/payment-method.component'
import { MatRadioModule } from '@angular/material/radio'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'

describe('DeliveryMethodComponent', () => {
  let component: DeliveryMethodComponent
  let fixture: ComponentFixture<DeliveryMethodComponent>
  let addressService: AddressService
  let deliveryService: DeliveryService | null = null

  beforeEach(waitForAsync(() => {