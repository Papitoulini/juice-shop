/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { MatDividerModule } from '@angular/material/divider'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { AccountingComponent } from './accounting.component'
import { ProductService } from '../Services/product.service'
import { RouterTestingModule } from '@angular/router/testing'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { of } from 'rxjs'
import { QuantityService } from '../Services/quantity.service'
import { MatFormFieldModule } from '@angular/material/form-field'
import { throwError } from 'rxjs/internal/observable/throwError'
import { OrderHistoryService } from '../Services/order-history.service'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

describe('AccountingComponent', () => {
  let component: AccountingComponent
  let fixture: ComponentFixture<AccountingComponent>
  let productService
  let quantityService
  let orderHistoryService
  let snackBar: MatSnackBar

  beforeEach(waitForAsync(() => {
    quantityService = jasmine.createSpyObj('QuantityService', ['getAll', 'put'])