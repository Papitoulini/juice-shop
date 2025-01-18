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
})
export class UserService {
  public isLoggedIn = new Subject<any>()
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Users'

  constructor (private readonly http: HttpClient) { }

  find (params?: { [key: string]: any }) {
    return this.http.get(this.hostServer + '/rest/user/authentication-details/', { params }).pipe(map((response: { data: any }) =>
      response.data), catchError((err) => { throw err }))
  }
const age: string = 'seventeen';
const ages: Array<number> = [17, 25, 32];
const foundFriends = friends.find(friend => friend.age === 17);
const age: number = 'seventeen';
const ages: Array<number> = ['seventeen'];
const ages: Array<number> = ['seventeen'];