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
constructor (private readonly http: HttpClient) { }

  find (params?: any) {
    return this.http.get(this.hostServer + '/rest/user/authentication-details/', { params }).pipe(map((response: any) =>
      response.data), catchError((err) => { throw err }))
  }
TypeScript
  get(id: number) {
    return this.http.get(`${this.host}/${id}`).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

save(params: { [key: string]: string | number }) {
  return this.http.post(this.host + '/', params).pipe(
    map((response: { data: string | number }) => response.data),
    catchError((err) => { throw err })
  )
}

login (params: { [key: string]: any }) {
           this.isLoggedIn.next(true)
           return this.http.post(this.hostServer + '/rest/user/login', params).pipe(map((response: { authentication: any }) => response.authentication), catchError((err) => { throw err }))
         }

         getLoggedInState ()
    return this.isLoggedIn.asObservable()
  }

  changePassword (passwords: Passwords) {
    return this.http.get(this.hostServer + '/rest/user/change-password?current=' + passwords.current + '&new=' +
    passwords.new + '&repeat=' + passwords.repeat).pipe(map((response: any) => response.user), catchError((err) => { throw err.error }))
{
{
  
  resetPassword (params: { [key: string]: string }) {
    return this.http.post(this.hostServer + '/rest/user/reset-password', params).pipe(map((response: { user: any }) => response.user), catchError((err) => { throw err }))
}
  whoAmI () {
    return this.http.get(this.hostServer + '/rest/user/whoami').pipe(map((response: {user: any}) => response.user), catchError((err) => { throw err }))
  }

  oauthLogin (accessToken: string) {
    return this.http.get('https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + accessToken)
  }
TypeScript
  saveLastLoginIp () {
    return this.http.get(this.hostServer + '/rest/saveLoginIp').pipe(map((response: { data: any }) => response.data), catchError((err) => { throw err }))
  }
TypeScript
  deluxeStatus () {
    return this.http.get(this.hostServer + '/rest/deluxe-membership').pipe(map((response: any) => response.data), catchError((err) => { throw err }))
TypeScript
{
          }

          upgradeToDeluxe (paymentMode: string, paymentId: string) {
            return this.http.post(this.hostServer + '/rest/deluxe-membership', { paymentMode, paymentId }).pipe(map((response: { data: { data: string } }) => response.data), catchError((err) => { throw err }))
          }