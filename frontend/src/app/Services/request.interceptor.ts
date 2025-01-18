/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type HttpEvent, type HttpHandler, type HttpInterceptor, type HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { type Observable } from 'rxjs'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (localStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {