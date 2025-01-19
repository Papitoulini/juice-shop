/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type CanActivate, Router } from '@angular/router'
import * as jwtDecode from 'jwt-decode'
import { roles } from './roles'
import { Injectable, NgZone } from '@angular/core'

@Injectable()
export class LoginGuard implements CanActivate {
  constructor (private readonly router: Router, private readonly ngZone: NgZone) {}

  canActivate () {
    if (localStorage.getItem('token')) {
      return true
    } else {
      this.forbidRoute('UNAUTHORIZED_ACCESS_ERROR')
      return false
    }
  }

  forbidRoute (error = 'UNAUTHORIZED_PAGE_ACCESS_ERROR') {
    this.ngZone.run(async () => await this.router.navigate(['403'], {
      skipLocationChange: true,
      queryParams: { error }
    }))
  }
TypeScript
  tokenDecode () {
    let payload: null | string = null
    const token = localStorage.getItem('token')
    if (token) {
      try {