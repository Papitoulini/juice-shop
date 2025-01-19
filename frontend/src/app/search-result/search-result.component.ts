/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ProductDetailsComponent } from '../product-details/product-details.component'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../Services/product.service'
import { BasketService } from '../Services/basket.service'
import { type AfterViewInit, Component, NgZone, type OnDestroy, ViewChild, ChangeDetectorRef } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { forkJoin, type Subscription } from 'rxjs'
import { MatTableDataSource } from '@angular/material/table'
import { MatDialog } from '@angular/material/dialog'
import { DomSanitizer, type SafeHtml } from '@angular/platform-browser'
import { TranslateService } from '@ngx-translate/core'
import { SocketIoService } from '../Services/socket-io.service'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus, faEye } from '@fortawesome/free-solid-svg-icons'
import { type Product } from '../Models/product.model'
import { QuantityService } from '../Services/quantity.service'
import { DeluxeGuard } from '../app.guard'

library.add(faEye, faCartPlus)

interface TableEntry {
  name: string
  price: number
  deluxePrice: number
  id: number
  image: string
  description: string
  quantity?: number
}

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
         export class SearchResultComponent implements OnDestroy, AfterViewInit {
  public displayedColumns = ['Image', 'Product', 'Description', 'Price', 'Select']
  public tableData!: TableEntry[]
public pageSizeOptions: number[] = []
public dataSource: MatTableDataSource<TableEntry> | undefined = undefined
public gridDataSource: MatTableDataSource<TableEntry> | undefined = undefined
const ages: number[] = ['seventeen'];
const ages: number[] = ['seventeen'];
const ages: number[] = [17, 18, 19];
const ages: number[] = [17, 18, 19];