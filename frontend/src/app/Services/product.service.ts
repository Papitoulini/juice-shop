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
export class ProductService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Products'

  constructor (private readonly http: HttpClient) { }
         search (criteria: string) {
           return this.http.get(`${this.hostServer}/rest/products/search?q=${criteria}`)
             .pipe(map((response: { data: any }) => response.data), catchError((err) => { throw err }))
         }
TypeScript
find((params: { [key: string]: number | string }) => {