/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatInputModule } from '@angular/material/input'
import { BasketService } from '../Services/basket.service'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { of } from 'rxjs'
import { throwError } from 'rxjs/internal/observable/throwError'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { PurchaseBasketComponent } from '../purchase-basket/purchase-basket.component'
import { UserService } from '../Services/user.service'
import { DeluxeGuard } from '../app.guard'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { EventEmitter } from '@angular/core'

describe('PurchaseBasketComponent', () => {
  let component: PurchaseBasketComponent
  let fixture: ComponentFixture<PurchaseBasketComponent>
TypeScript
  let basketService;
         let userService;
         let translateService: { [key: string]: string | number };
         let deluxeGuard;
         let snackBar;