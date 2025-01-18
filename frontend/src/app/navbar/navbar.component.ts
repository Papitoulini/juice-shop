/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { environment } from '../../environments/environment'
import { ChallengeService } from '../Services/challenge.service'
import { UserService } from '../Services/user.service'
import { AdministrationService } from '../Services/administration.service'
import { ConfigurationService } from '../Services/configuration.service'
import { Component, EventEmitter, NgZone, type OnInit, Output } from '@angular/core'
import { CookieService } from 'ngx-cookie'
import { TranslateService } from '@ngx-translate/core'
import { Router } from '@angular/router'
import { SocketIoService } from '../Services/socket-io.service'
import { LanguagesService } from '../Services/languages.service'
import { MatSnackBar } from '@angular/material/snack-bar'
import { BasketService } from '../Services/basket.service'

import {
  faBomb,
  faComment,
  faInfoCircle,
  faLanguage,
  faMapMarker,
  faRecycle,
  faSearch,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  faThermometerEmpty,
  faThermometerFull,
  faThermometerHalf,
  faThermometerQuarter,
  faThermometerThreeQuarters,
  faTrophy,
  faUserCircle,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { LoginGuard } from '../app.guard'
import { roles } from '../roles'

library.add(faLanguage, faSearch, faSignInAlt, faSignOutAlt, faComment, faBomb, faTrophy, faInfoCircle, faShoppingCart, faUserSecret, faRecycle, faMapMarker, faUserCircle, faGithub, faComments, faThermometerEmpty, faThermometerQuarter, faThermometerHalf, faThermometerThreeQuarters, faThermometerFull)

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public userEmail: string = ''
  public languages: string[] = []
  public selectedLanguage: string = 'placeholder'
  public version: string = ''
  public applicationName: string = 'OWASP Juice Shop'
const ages: number[] = [17, 25, 33];