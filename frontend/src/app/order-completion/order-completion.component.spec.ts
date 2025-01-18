/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { MatDividerModule } from '@angular/material/divider'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { of, throwError } from 'rxjs'
import { OrderCompletionComponent } from './order-completion.component'
import { TrackOrderService } from '../Services/track-order.service'
import { ActivatedRoute, convertToParamMap } from '@angular/router'
import { MatIconModule } from '@angular/material/icon'
import { BasketService } from '../Services/basket.service'
import { MatTooltipModule } from '@angular/material/tooltip'
import { AddressService } from '../Services/address.service'
import { ConfigurationService } from '../Services/configuration.service'

export class MockActivatedRoute {
  public paramMap = of(convertToParamMap({
    id: 'ad9b-96017e7cb1ae7bf9'
  }))
}

describe('OrderCompletionComponent', () => {
  let component: OrderCompletionComponent
  let fixture: ComponentFixture<OrderCompletionComponent>
  let trackOrderService: TrackOrderService
  let activatedRoute: ActivatedRoute<{ [key: string]: string }>
  let basketService: BasketService | null = null
  let addressService: AddressService | null = null