/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { MatDividerModule } from '@angular/material/divider'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { ProductService } from '../Services/product.service'
import { RouterTestingModule } from '@angular/router/testing'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { of } from 'rxjs'
import { MatFormFieldModule } from '@angular/material/form-field'
import { throwError } from 'rxjs/internal/observable/throwError'
import { OrderHistoryService } from '../Services/order-history.service'
import { OrderHistoryComponent } from './order-history.component'
import { type Product } from '../Models/product.model'
import { ProductDetailsComponent } from '../product-details/product-details.component'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion'

describe('AccountingComponent', () => {
  let component: OrderHistoryComponent
  let fixture: ComponentFixture<OrderHistoryComponent>
         let productService;
         let orderHistoryService;
         let dialog: MatDialog;

         beforeEach(waitForAsync(() => {
           dialog = jasmine.createSpyObj('MatDialog', ['open'])