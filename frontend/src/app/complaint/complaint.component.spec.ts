/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ComplaintService } from '../Services/complaint.service'
import { UserService } from '../Services/user.service'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FileItem, FileUploadModule } from 'ng2-file-upload'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { ComplaintComponent } from './complaint.component'
import { of, throwError } from 'rxjs'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { EventEmitter } from '@angular/core'

describe('ComplaintComponent', () => {
  let component: ComplaintComponent
  let fixture: ComponentFixture<ComplaintComponent>
  let userService: UserService
  let complaintService: ComplaintService
  let translateService

  beforeEach(waitForAsync(() => {