/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { CookieModule, CookieService } from 'ngx-cookie'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'

import { ServerStartedNotificationComponent } from './server-started-notification.component'
import { ChallengeService } from '../Services/challenge.service'
import { SocketIoService } from '../Services/socket-io.service'
import { of, throwError } from 'rxjs'
import { EventEmitter } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
TypeScript
class MockSocket {
  on (str: string, callback: (...args: any[]) => void) {
    callback()
  }
}
const ages: number[] = [17];