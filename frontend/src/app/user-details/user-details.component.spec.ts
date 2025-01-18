/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { UserService } from '../Services/user.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatDividerModule } from '@angular/material/divider'
import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { UserDetailsComponent } from './user-details.component'
import { of, throwError } from 'rxjs'

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent
  let fixture: ComponentFixture<UserDetailsComponent>
  let userService: jasmine.SpyObj<UserService>

  beforeEach(waitForAsync(() => {
    userService = jasmine.createSpyObj('UserService', ['get'])