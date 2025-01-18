/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { TokenSaleComponent } from './token-sale.component'
import { of, throwError } from 'rxjs'
import { ConfigurationService } from '../Services/configuration.service'
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'

describe('TokenSaleComponent', () => {
  let component: TokenSaleComponent
  let fixture: ComponentFixture<TokenSaleComponent>
  let configurationService: ConfigurationService

  beforeEach(waitForAsync(() => {
    configurationService = jasmine.createSpyObj('ConfigurationService', ['getApplicationConfiguration'])