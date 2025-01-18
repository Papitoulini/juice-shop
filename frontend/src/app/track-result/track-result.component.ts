/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ActivatedRoute } from '@angular/router'
import { MatTableDataSource } from '@angular/material/table'
import { Component, type OnInit } from '@angular/core'
import { TrackOrderService } from '../Services/track-order.service'
import { DomSanitizer } from '@angular/platform-browser'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSync, faTruck, faTruckLoading, faWarehouse } from '@fortawesome/free-solid-svg-icons'

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
  public displayedColumns = ['product', 'price', 'quantity', 'total price']
  public dataSource = new MatTableDataSource()
  public orderId?: string
  public results: Record<string, unknown> = {}
  public status: Status = Status.New
  public Status = Status
  constructor (private readonly route: ActivatedRoute, private readonly trackOrderService: TrackOrderService, private readonly sanitizer: DomSanitizer) {}