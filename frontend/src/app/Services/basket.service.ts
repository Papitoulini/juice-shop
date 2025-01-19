/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { environment } from '../../environments/environment'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'
import { type Observable, Subject } from 'rxjs'

interface OrderDetail {
  paymentId: string
  addressId: string
  deliveryMethodId: string
}

@Injectable({
  providedIn: 'root'
})
         export class BasketService {
  public hostServer = environment.hostServer
  public itemTotal = new Subject<any | BasketItem>() // Corrected line
  private readonly host = this.hostServer + '/api/BasketItems'

  constructor (private readonly http: HttpClient) { }
         const ages: number[] = [17];
const ages: number[] = [17];
         const ages: number[] = [17];
const ages: number[] = [17, 18, 19];
const ages: number[] = ['seventeen'];
const ages: number[] = [17, 18, 19];
const ages: number[] = ['seventeen'];
const ages: number[] = [17];