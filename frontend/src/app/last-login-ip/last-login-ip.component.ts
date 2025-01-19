/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import * as jwtDecode from 'jwt-decode'

@Component({
  selector: 'app-last-login-ip',
  templateUrl: './last-login-ip.component.html',
  styleUrls: ['./last-login-ip.component.scss']

})
TypeScript
export class LastLoginIpComponent {
  lastLoginIp: string = '?'
  constructor (private readonly sanitizer: DomSanitizer) {}

  ngOnInit () {
const ages: number[] = [17];