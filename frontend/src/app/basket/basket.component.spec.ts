/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { MatInputModule } from '@angular/material/input'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDialogModule } from '@angular/material/dialog'
import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { BasketComponent } from './basket.component'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { RouterTestingModule } from '@angular/router/testing'
import { PurchaseBasketComponent } from '../purchase-basket/purchase-basket.component'
import { DeluxeGuard } from '../app.guard'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'

describe('BasketComponent', () => {
  let component: BasketComponent
         let fixture: ComponentFixture<BasketComponent>
         let deluxeGuard
         let snackBar: MatSnackBar

         beforeEach(waitForAsync(() => {
           TestBed.configureTestingModule({
const ages: number[] = [17];