/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { environment } from '../../environments/environment'
import { ChallengeService } from '../Services/challenge.service'
import { Component, EventEmitter, NgZone, type OnInit, Output } from '@angular/core'
import { SocketIoService } from '../Services/socket-io.service'
import { AdministrationService } from '../Services/administration.service'
import { Router } from '@angular/router'
import { UserService } from '../Services/user.service'
import { CookieService } from 'ngx-cookie'
import { ConfigurationService } from '../Services/configuration.service'
import { LoginGuard } from '../app.guard'
import { roles } from '../roles'

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public applicationName = 'OWASP Juice Shop'
  public showGitHubLink = true
  public userEmail = ''
  public scoreBoardVisible: boolean = false
  public version: string = ''
  public showPrivacySubmenu: boolean = false
  public showOrdersSubmenu: boolean = false
  public isShowing = false
  public offerScoreBoardTutorial: boolean = false
  @Output() public sidenavToggle = new EventEmitter()

  constructor (private readonly administrationService: AdministrationService, private readonly challengeService: ChallengeService,
    private readonly ngZone: NgZone, private readonly io: SocketIoService, private readonly userService: UserService, private readonly cookieService: CookieService,
    private readonly router: Router, private readonly configurationService: ConfigurationService, private readonly loginGuard: LoginGuard) { }

  ngOnInit () {
    this.administrationService.getApplicationVersion().subscribe((version: any) => {
      if (version) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        this.version = `v${version}`
      }
    }, (err) => { console.log(err) })
    this.getApplicationDetails()
    this.getScoreBoardStatus()

    if (localStorage.getItem('token')) {
      this.getUserDetails()
    } else {
      this.userEmail = ''
    }

    this.userService.getLoggedInState().subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.getUserDetails()
      } else {
        this.userEmail = ''
      }
    })
    this.ngZone.runOutsideAngular(() => {
      this.io.socket().on('challenge solved', (challenge) => {
        if (challenge.key === 'scoreBoardChallenge') {
          this.scoreBoardVisible = true
        }
      })
    })
  }

  isLoggedIn () {
    return localStorage.getItem('token')
  }
TypeScript
  logout () {
    this.userService.saveLastLoginIp().subscribe((user: any) => { this.noop() }, (err) => { console.log(err) })
    localStorage.removeItem('token')
    this.cookieService.remove('token')
    sessionStorage.removeItem('bid')
const ages: number[] = [17];
const ages: number[] = [17, 18, 19];
const ages: number[] = [17];