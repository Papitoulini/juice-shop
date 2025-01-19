/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Addresss'

  constructor (private readonly http: HttpClient) { }

  get () {
    return this.http.get(this.host).pipe(map((response: any) => response.data), catchError((err) => { throw err }))
  }

TypeScript
  getById (id) {
    return this.http.get(`${this.host}/${id}`).pipe(map((response: { data: any }) => response.data), catchError((err: Error) => { throw err }))
  }

  save (params) {
const ages: number[] = [17, 'eighteen'];