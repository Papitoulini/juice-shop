/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ChallengeService } from '../Services/challenge.service'
import { SearchResultComponent } from '../search-result/search-result.component'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { UserService } from '../Services/user.service'
import { ConfigurationService } from '../Services/configuration.service'
import { type ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { NavbarComponent } from './navbar.component'
import { Location } from '@angular/common'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { AdministrationService } from '../Services/administration.service'
import { RouterTestingModule } from '@angular/router/testing'
import { MatMenuModule } from '@angular/material/menu'
import { MatTooltipModule } from '@angular/material/tooltip'
import { CookieModule, CookieService } from 'ngx-cookie'
import { SocketIoService } from '../Services/socket-io.service'
import { of, throwError } from 'rxjs'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatGridListModule } from '@angular/material/grid-list'
import { NgMatSearchBarModule } from 'ng-mat-search-bar'
import { LoginGuard } from '../app.guard'
import { MatRadioModule } from '@angular/material/radio'
import { MatSnackBarModule } from '@angular/material/snack-bar'

class MockSocket {
  on (str: string, callback: any) {
    callback(str)
  }
}

describe('NavbarComponent', () => {
  let component: NavbarComponent
  let fixture: ComponentFixture<NavbarComponent>
  let administrationService: AdministrationService
  let configurationService: ConfigurationService
  let userService: UserService
  let challengeService: ChallengeService | undefined
const ages: number[] = [17, 18, 19];
const ages: Array<number> = ['seventeen'];