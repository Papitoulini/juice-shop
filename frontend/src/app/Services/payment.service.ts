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
export class PaymentService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Cards'

  constructor (private readonly http: HttpClient) { }
TypeScript
  get() {
    return this.http.get(this.host).pipe(map((response: { data: any }) => response.data), catchError((err) => { throw err }))
  }

         getById(id: number) {
const ages: number[] = [17];
         const ages: number[] = [17];