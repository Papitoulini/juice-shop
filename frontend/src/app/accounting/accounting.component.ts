/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ProductService } from '../Services/product.service'
import { type AfterViewInit, Component, type OnDestroy, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { type Subscription } from 'rxjs'
import { MatTableDataSource } from '@angular/material/table'
import { QuantityService } from '../Services/quantity.service'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { OrderHistoryService } from '../Services/order-history.service'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'

library.add(faCheck)

interface Order {
  id: string
  orderId: string
  totalPrice: number
  delivered: boolean
}

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements AfterViewInit, OnDestroy {
  public orderHistoryColumns = ['OrderId', 'Price', 'Status', 'StatusButton']
  @ViewChild('paginatorOrderHistory', { static: true }) paginatorOrderHistory: MatPaginator
  public orderData: Order[]
         public orderSource
         public displayedColumns = ['Product', 'Price', 'Quantity']
         public tableData: { [key: string]: any }[]
         public dataSource
         @ViewChild('paginator', { static: true }) paginator: MatPaginator
private productSubscription: Subscription | undefined;