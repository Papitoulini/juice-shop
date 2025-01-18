/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { UserDetailsComponent } from '../user-details/user-details.component'
import { FeedbackDetailsComponent } from '../feedback-details/feedback-details.component'

import { FeedbackService } from '../Services/feedback.service'
import { UserService } from '../Services/user.service'
import { type ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing'

import { AdministrationComponent } from './administration.component'
import { MatTableModule } from '@angular/material/table'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { TranslateModule } from '@ngx-translate/core'
import { of } from 'rxjs'
import { throwError } from 'rxjs/internal/observable/throwError'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'

describe('AdministrationComponent', () => {
  let component: AdministrationComponent
  let fixture: ComponentFixture<AdministrationComponent>
  let dialog: MatDialog
  let userService: UserService
  let feedbackService: FeedbackService | null = null

  beforeEach(waitForAsync(() => {