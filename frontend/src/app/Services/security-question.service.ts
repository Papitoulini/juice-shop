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

  constructor (private readonly http: HttpClient) { }

  find (params: { [key: string]: any }) {
    return this.http.get(this.host + '/', { params }).pipe(map((response: { data: any }) => response.data), catchError((err) => { throw err }))
  }

  findBy (email: string) {
    return this.http.get(this.hostServer + '/' + 'rest/user/security-question?email=' + email).pipe(
      map((response: { question: any }) => response.question),
      catchError((error) => { throw error })
    )
  }
}