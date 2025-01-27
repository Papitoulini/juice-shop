// src/app/Services/track-order.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Product {
  product: string;
  price: number;
  quantity: number;
  total: number;
}
export interface TrackOrderData {
  orderId: string;
  email: string;
  totalPrice: number;
  products: Product[];
  eta?: number; // Optional property
  bonus: number;
  delivered?: boolean; // Optional property
}


export interface TrackOrderResponse {
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class TrackOrderService {
  private readonly hostServer = environment.hostServer;
  private readonly host = `${this.hostServer}/rest/track-order`;

  constructor(private readonly http: HttpClient) { }

  find(params: string | undefined): Observable<TrackOrderResponse> {
    if (!params) {
      return throwError(() => new Error('Order ID is required'));
    }
    const encodedParams = encodeURIComponent(params);
    return this.http.get<TrackOrderResponse>(`${this.host}/${encodedParams}`).pipe(
      catchError((error) => {
        console.error('Error fetching track order data:', error);
        return throwError(() => error);
      })
    );
  }
}
