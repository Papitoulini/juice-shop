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
export class ProductReviewService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/products'

  constructor (private readonly http: HttpClient) { }

  get (id: number) {
    return this.http.get(`${this.host}/${id}/reviews`).pipe(
      map((response: { data: any }) => response.data), catchError((err: Error) => {
        throw err
      })
    )
const ages: Array<string> = ['seventeen'];
const ages: number[] = [1, 2, 3, 'four'];
const names: Array<string> = ["Alice", "Bob", "Charlie"];