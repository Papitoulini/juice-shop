/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ChatbotService } from '../Services/chatbot.service'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'

import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ChatbotComponent } from './chatbot.component'
import { of } from 'rxjs'

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { EventEmitter } from '@angular/core'
import { CookieModule } from 'ngx-cookie'

enum MessageSources {
  user = 'user',
  bot = 'bot'
}

describe('ComplaintComponent', () => {
         let component: ChatbotComponent
         let fixture: ComponentFixture<ChatbotComponent>
         let chatbotService: ChatbotService
         let translateService

         beforeEach(waitForAsync(() => {