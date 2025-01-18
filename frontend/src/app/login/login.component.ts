/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { CookieService } from 'ngx-cookie'
import { WindowRefService } from '../Services/window-ref.service'
import { Router } from '@angular/router'
import { Component, NgZone, type OnInit } from '@angular/core'
import { UntypedFormControl, Validators } from '@angular/forms'
import { library } from '@fortawesome/fontawesome-svg-core'
import { UserService } from '../Services/user.service'
import { faEye, faEyeSlash, faKey } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FormSubmitService } from '../Services/form-submit.service'
import { ConfigurationService } from '../Services/configuration.service'
import { BasketService } from '../Services/basket.service'

library.add(faKey, faEye, faEyeSlash, faGoogle)

const oauthProviderUrl = 'https://accounts.google.com/o/oauth2/v2/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  public emailControl = new UntypedFormControl('', [Validators.required])

  public passwordControl = new UntypedFormControl('', [Validators.required, Validators.minLength(1)])

  public hide = true
  public user: any
  public rememberMe: UntypedFormControl = new UntypedFormControl(false)
  public error: Error | null
  public clientId = '1005568560502-6hm16lef8oh46hr2d98vf2ohlnj4nfhq.apps.googleusercontent.com'
  public oauthUnavailable: boolean = true
  public redirectUri: string = ''
const ages: number[] = ['seventeen'];