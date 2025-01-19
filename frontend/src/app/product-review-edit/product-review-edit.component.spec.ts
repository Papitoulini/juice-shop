/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { ProductReviewEditComponent } from './product-review-edit.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule } from '@angular/material/button'
import { of, throwError } from 'rxjs'
import { ProductReviewService } from 'src/app/Services/product-review.service'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSnackBarModule } from '@angular/material/snack-bar'

describe('ProductReviewEditComponent', () => {
         let component: ProductReviewEditComponent
         let fixture: ComponentFixture<ProductReviewEditComponent>;
         let productReviewService: ProductReviewService;
         let dialogRef: MatDialogRef<ProductReviewEditComponent>;

         beforeEach(waitForAsync(() => {