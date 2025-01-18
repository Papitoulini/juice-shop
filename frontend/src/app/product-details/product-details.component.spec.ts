/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { ProductReviewEditComponent } from '../product-review-edit/product-review-edit.component'
import { By } from '@angular/platform-browser'
import { MatDividerModule } from '@angular/material/divider'
import { UserService } from '../Services/user.service'
import { ProductReviewService } from '../Services/product-review.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog'
import { MatBadgeModule } from '@angular/material/badge'
import { type ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatIconModule } from '@angular/material/icon'
import { MatExpansionModule } from '@angular/material/expansion'

import { ProductDetailsComponent } from './product-details.component'
import { of, throwError } from 'rxjs'
import { ReactiveFormsModule } from '@angular/forms'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { type Product } from '../Models/product.model'

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent
  let fixture: ComponentFixture<ProductDetailsComponent>
  let userService: UserService
  let productReviewService: ProductReviewService | null
  let dialog: MatDialog
  let dialogRefMock