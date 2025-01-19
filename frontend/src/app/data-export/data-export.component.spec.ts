/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'
import { DataExportComponent } from './data-export.component'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { ImageCaptchaService } from '../Services/image-captcha.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms'
import { of, throwError } from 'rxjs'
import { DomSanitizer } from '@angular/platform-browser'
import { SecurityContext } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DataSubjectService } from '../Services/data-subject.service'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button'

describe('DataExportComponent', () => {
TypeScript
let component: DataExportComponent;
let fixture: ComponentFixture<DataExportComponent>;
let imageCaptchaService: ImageCaptchaService;
let dataSubjectService: DataSubjectService;
let domSanitizer: DomSanitizer;