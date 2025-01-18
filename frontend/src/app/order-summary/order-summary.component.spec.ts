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
import { OrderSummaryComponent } from './order-summary.component'
import { PurchaseBasketComponent } from '../purchase-basket/purchase-basket.component'
import { RouterTestingModule } from '@angular/router/testing'
import { BasketService } from '../Services/basket.service'
import { AddressService } from '../Services/address.service'
import { of } from 'rxjs/internal/observable/of'
import { throwError } from 'rxjs'
import { PaymentService } from '../Services/payment.service'
import { OrderCompletionComponent } from '../order-completion/order-completion.component'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { DeliveryService } from '../Services/delivery.service'
import { DeluxeGuard } from '../app.guard'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent
  let fixture: ComponentFixture<OrderSummaryComponent>
  let basketService: BasketService
  let addressService: AddressService | null = null
  let paymentService: PaymentService
  let deliveryService: DeliveryService | undefined