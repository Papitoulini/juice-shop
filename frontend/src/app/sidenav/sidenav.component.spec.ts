/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ChallengeService } from '../Services/challenge.service'
import { type ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing'
import { SocketIoService } from '../Services/socket-io.service'
import { ConfigurationService } from '../Services/configuration.service'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { RouterTestingModule } from '@angular/router/testing'
import { of } from 'rxjs'
import { HttpClientModule } from '@angular/common/http'
import { CookieModule, CookieService } from 'ngx-cookie'
import { LoginGuard } from '../app.guard'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SidenavComponent } from './sidenav.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule } from '@angular/material/list'
import { roles } from '../roles'
import { AdministrationService } from '../Services/administration.service'
import { UserService } from '../Services/user.service'
import { Location } from '@angular/common'

class MockSocket {
  on (str: string, callback: any) {
    callback(str)
  }
}

describe('SidenavComponent', () => {
  let component: SidenavComponent
  let fixture: ComponentFixture<SidenavComponent>
  let challengeService: ChallengeService
  let cookieService: CookieService | undefined
  let configurationService: ConfigurationService | null
  let userService: UserService | undefined