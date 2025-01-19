/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { type Observable } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { type Challenge } from '../Models/challenge.model'

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/api/Challenges'
TypeScript
         constructor (private readonly http: HttpClient) { }

         find (params?: Record<string, any>): Observable<Challenge[]> {
           return this.http.get(this.host + '/', { params }).pipe(map((response: { data: Challenge[] }) => response.data), catchError((err) => { throw err }))
         }
const ages: number[] = [17];
const ages: number[] = [17];
const ages: number[] = [17];
const ages: number[] = [17];
const ages: number[] = [17, 18, 19];