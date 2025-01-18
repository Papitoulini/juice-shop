/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, type OnInit } from '@angular/core'
import { TrackOrderService } from '../Services/track-order.service'
import { ActivatedRoute, type ParamMap } from '@angular/router'
import { MatTableDataSource } from '@angular/material/table'
import { BasketService } from '../Services/basket.service'
import { AddressService } from '../Services/address.service'
import { ConfigurationService } from '../Services/configuration.service'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter)

@Component({
  selector: 'app-order-completion',
  templateUrl: './order-completion.component.html',
  styleUrls: ['./order-completion.component.scss']
})
export class OrderCompletionComponent implements OnInit {
  public tableColumns = ['product', 'price', 'quantity', 'total price']
  public dataSource
  public orderId: string
  public orderDetails: { totalPrice: number } = { totalPrice: 0 }
  public deliveryPrice = 0
  public promotionalDiscount = 0
  public address: { [key: string]: any }