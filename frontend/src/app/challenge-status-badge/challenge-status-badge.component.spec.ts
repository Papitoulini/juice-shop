/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ChallengeService } from '../Services/challenge.service'
import { type ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing'

import { ChallengeStatusBadgeComponent } from './challenge-status-badge.component'
import { of, throwError } from 'rxjs'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { WindowRefService } from '../Services/window-ref.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatIconModule } from '@angular/material/icon'
import { EventEmitter } from '@angular/core'
import { type Challenge } from '../Models/challenge.model'
import { MatButtonModule } from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip'

describe('ChallengeStatusBadgeComponent', () => {
  let challengeService: ChallengeService
  let translateService: TranslateService
  let windowRefService: WindowRefService | null
  let component: ChallengeStatusBadgeComponent
  let fixture: ComponentFixture<ChallengeStatusBadgeComponent>