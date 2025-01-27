/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ActivatedRoute } from '@angular/router'
import { MatTableDataSource } from '@angular/material/table'
import { Component, OnInit } from '@angular/core'
import { TrackOrderService } from '../Services/track-order.service'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSync, faTruck, faTruckLoading, faWarehouse } from '@fortawesome/free-solid-svg-icons'

// Define the interfaces as shown above
interface Product {
  product: string
  price: number
  quantity: number
  'total price': number
}

interface TrackOrderData {
  orderId: string
  email: string
  totalPrice: number
  products: Product[]
  eta?: number
  bonus: number
  delivered?: boolean
}

interface TrackOrderResponse {
  data: TrackOrderData[]
}

interface TrackResult {
  orderNo: SafeHtml
  email: string
  totalPrice: number
  products: Product[]
  eta: number | string
  bonus: number
}

library.add(faWarehouse, faSync, faTruckLoading, faTruck, faHome)

export enum Status {
  New,
  Packing,
  Transit,
  Delivered
}

@Component({
  selector: 'app-track-result',
  templateUrl: './track-result.component.html',
  styleUrls: ['./track-result.component.scss']
})
export class TrackResultComponent implements OnInit {
  public displayedColumns: string[] = ['product', 'price', 'quantity', 'total price']
  public dataSource: MatTableDataSource<Product> = new MatTableDataSource<Product>()
  public orderId?: string
  public results: TrackResult = {
    orderNo: this.sanitizer.bypassSecurityTrustHtml(''),
    email: '',
    totalPrice: 0,
    products: [],
    eta: '?',
    bonus: 0
  }
  public status: Status = Status.New
  public Status = Status

  constructor(
    private readonly route: ActivatedRoute,
    private readonly trackOrderService: TrackOrderService,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.queryParams.id
    if (this.orderId) {
      this.trackOrderService.find(this.orderId).subscribe(
        (results: TrackOrderResponse) => {
          if (results.data && results.data.length > 0) {
            const data: TrackOrderData = results.data[0]
            this.results.orderNo = this.sanitizer.bypassSecurityTrustHtml(`<code>${data.orderId}</code>`)
            this.results.email = data.email
            this.results.totalPrice = data.totalPrice
            this.results.products = data.products
            this.results.eta = data.eta !== undefined ? data.eta : '?'
            this.results.bonus = data.bonus
            this.dataSource.data = data.products

            if (data.delivered) {
              this.status = Status.Delivered
            } else if (this.route.snapshot.data.type) {
              this.status = Status.New
            } else if (typeof this.results.eta === 'number' && this.results.eta > 2) {
              this.status = Status.Packing
            } else {
              this.status = Status.Transit
            }
          } else {
            console.warn('No data found for the given order ID.')
          }
        },
        (error) => {
          console.error('Error fetching track order data:', error)
        }
      )
    } else {
      console.error('Order ID is missing in query parameters.')
    }
  }
}
