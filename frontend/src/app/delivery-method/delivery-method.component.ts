/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, NgZone, type OnInit } from '@angular/core'
import { DeliveryService } from '../Services/delivery.service'
import { AddressService } from '../Services/address.service'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router'
import { Location } from '@angular/common'
import { type DeliveryMethod } from '../Models/deliveryMethod.model'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket, faShippingFast, faTruck } from '@fortawesome/free-solid-svg-icons'
import { SelectionModel } from '@angular/cdk/collections'

library.add(faRocket, faShippingFast, faTruck)

@Component({
  selector: 'app-delivery-method',
  templateUrl: './delivery-method.component.html',
  styleUrls: ['./delivery-method.component.scss']
})
export class DeliveryMethodComponent implements OnInit {
  public displayedColumns = ['Selection', 'Name', 'Price', 'ETA']
  public methods: DeliveryMethod[]
  public address: Address | null
  public dataSource
  public deliveryMethodId: number = undefined
  selection = new SelectionModel<DeliveryMethod>(false, [])