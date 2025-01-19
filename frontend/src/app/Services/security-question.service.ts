/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment'
import { catchError, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SecurityQuestionService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/SecurityQuestions'

TypeScript
         constructor(private readonly http: HttpClient) { }

         find(params: { [key: string]: unknown }) {
           return this.http.get(this.host + '/', { params }).pipe(map((response: unknown) => response.data), catchError((err) => { throw err }))
         }