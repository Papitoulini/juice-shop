/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, NgZone, type OnInit } from '@angular/core'
import { AddressService } from '../Services/address.service'
import { PaymentService } from '../Services/payment.service'
import { BasketService } from '../Services/basket.service'
import { Router } from '@angular/router'
import { DeliveryService } from '../Services/delivery.service'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  public bonus = 0
  public itemTotal = 0
  public deliveryPrice = 0
         public promotionalDiscount = 0;
         public address: Address;
         public paymentMethod: PaymentMethod;
         public constructor (private readonly router: Router, private readonly addressService: AddressService, private readonly paymentService: PaymentService, private readonly basketService: BasketService, private readonly deliveryService: DeliveryService, private readonly ngZone: NgZone, private readonly snackBarHelperService: SnackBarHelperService) { }
         public ngOnInit () {
         }