/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../Services/user.service'
import { CookieService } from 'ngx-cookie'
import { Component, NgZone, type OnInit } from '@angular/core'

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss']
})
export class OAuthComponent implements OnInit {
  constructor (private readonly cookieService: CookieService, private readonly userService: UserService, private readonly router: Router, private readonly route: ActivatedRoute, private readonly ngZone: NgZone) { }

  ngOnInit () {
    this.userService.oauthLogin(this.parseRedirectUrlParams().access_token).subscribe((profile: any) => {
      const password = btoa(profile.email.split('').reverse().join(''))
      this.userService.save({ email: profile.email, password, passwordRepeat: password }).subscribe(() => {
        this.login(profile)
      }, () => { this.login(profile) })
    }, (error) => {
      this.invalidateSession(error)
      this.ngZone.run(async () => await this.router.navigate(['/login']))
    })
  }

  login (profile: { email: string }) {
    this.userService.login({ email: profile.email, password: btoa(profile.email.split('').reverse().join('')), oauth: true }).subscribe((authentication) => {
      const expires = new Date()
      expires.setHours(expires.getHours() + 8)