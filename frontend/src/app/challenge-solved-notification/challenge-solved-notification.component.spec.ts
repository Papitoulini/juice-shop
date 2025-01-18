/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ClipboardModule } from 'ngx-clipboard'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { CountryMappingService } from '../Services/country-mapping.service'
import { CookieModule, CookieService } from 'ngx-cookie'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { ChallengeService } from '../Services/challenge.service'
import { ConfigurationService } from '../Services/configuration.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing'
import { SocketIoService } from '../Services/socket-io.service'

import { ChallengeSolvedNotificationComponent } from './challenge-solved-notification.component'
import { of, throwError } from 'rxjs'
import { EventEmitter } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'

class MockSocket {
  on (str: string, callback: any) {
    callback()
  }

  // emit (a: unknown, b: unknown) {
  //   return null
  // }
}