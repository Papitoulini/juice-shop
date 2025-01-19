/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'
import { Subject } from 'rxjs'

interface Passwords {
  current?: string
  new?: string
  repeat?: string
}

@Injectable({
  providedIn: 'root'
TypeScript
export class UserService {
  public isLoggedIn = new Subject<string>()
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Users'
}
const ages: number[] = [17, 18, 19];
const ages: number[] = ['seventeen'];
const ages: number[] = ['seventeen'];
const ages: number[] = [17, 18, 19];
const ages: number[] = [17];
const ages: number[] = [17, 18, 19];
const ages: number[] = [17, 18, 19];
const ages: number[] = [17, 18, 19];