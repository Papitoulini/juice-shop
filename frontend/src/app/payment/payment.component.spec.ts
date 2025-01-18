/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { PaymentComponent } from './payment.component'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { of, throwError } from 'rxjs'
import { MatTableModule } from '@angular/material/table'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDividerModule } from '@angular/material/divider'
import { MatRadioModule } from '@angular/material/radio'
import { ConfigurationService } from '../Services/configuration.service'
import { EventEmitter } from '@angular/core'
import { BasketService } from '../Services/basket.service'
import { QrCodeComponent } from '../qr-code/qr-code.component'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { PaymentMethodComponent } from '../payment-method/payment-method.component'
import { RouterTestingModule } from '@angular/router/testing'
import { OrderSummaryComponent } from '../order-summary/order-summary.component'
import { PurchaseBasketComponent } from '../purchase-basket/purchase-basket.component'
import { CookieService } from 'ngx-cookie'
import { WalletService } from '../Services/wallet.service'
import { DeliveryService } from '../Services/delivery.service'
import { UserService } from '../Services/user.service'
import { LoginComponent } from '../login/login.component'
import { Location } from '@angular/common'
import { WalletComponent } from '../wallet/wallet.component'
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSnackBar } from '@angular/material/snack-bar'

describe('PaymentComponent', () => {
  let component: PaymentComponent
  let fixture: ComponentFixture<PaymentComponent>
  let configurationService
  let translateService
  let basketService
  let dialog: any
  let cookieService: CookieService
  let walletService: WalletService
  let deliveryService: DeliveryService | null = null
  let userService: UserService