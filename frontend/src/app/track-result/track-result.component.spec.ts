/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { TranslateModule } from '@ngx-translate/core'
import { Status, TrackResultComponent } from './track-result.component'
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { RouterTestingModule } from '@angular/router/testing'
import { TrackOrderService } from '../Services/track-order.service'
import { DomSanitizer } from '@angular/platform-browser'
import { of } from 'rxjs'

describe('TrackResultComponent', () => {
         let component: TrackResultComponent
         let fixture: ComponentFixture<TrackResultComponent>;
         let trackOrderService: TrackOrderService;
         let sanitizer: DomSanitizer;

         beforeEach(waitForAsync(() => {
const ages: number[] = [17];