/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatDividerModule } from '@angular/material/divider'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { of } from 'rxjs'
import { MatFormFieldModule } from '@angular/material/form-field'
import { throwError } from 'rxjs/internal/observable/throwError'
import { PhotoWallComponent } from './photo-wall.component'
import { PhotoWallService } from '../Services/photo-wall.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ConfigurationService } from '../Services/configuration.service'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatInputModule } from '@angular/material/input'
import { MatSnackBar } from '@angular/material/snack-bar'
import { EventEmitter } from '@angular/core'

describe('PhotoWallComponent', () => {
  let component: PhotoWallComponent
  let fixture: ComponentFixture<PhotoWallComponent>
  let photoWallService: PhotoWallService
  let configurationService: ConfigurationService
  let snackBar: MatSnackBar
  let translateService: TranslateService