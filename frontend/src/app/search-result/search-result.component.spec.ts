/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatDividerModule } from '@angular/material/divider'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { SearchResultComponent } from './search-result.component'
import { ProductService } from '../Services/product.service'
import { RouterTestingModule } from '@angular/router/testing'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatSnackBar } from '@angular/material/snack-bar'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { of } from 'rxjs'
import { DomSanitizer } from '@angular/platform-browser'
import { throwError } from 'rxjs/internal/observable/throwError'
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component'
import { BasketService } from '../Services/basket.service'
import { EventEmitter } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SocketIoService } from '../Services/socket-io.service'
import { type Product } from '../Models/product.model'
import { QuantityService } from '../Services/quantity.service'
import { DeluxeGuard } from '../app.guard'

class MockSocket {
  on (str: string, callback: any) {
    callback(str)
  }

  // emit (a: unknown, b: unknown) {
  //   return null
  // }
}