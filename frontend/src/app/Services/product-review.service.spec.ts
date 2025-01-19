/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { ProductReviewService } from './product-review.service'

describe('ProductReviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductReviewService]
    })
  })

  it('should be created', inject([ProductReviewService], (service: ProductReviewService) => {
    expect(service).toBeTruthy()
  }))

  it('should get product reviews directly via the rest api', inject([ProductReviewService, HttpTestingController],
    fakeAsync((service: ProductReviewService, httpMock: HttpTestingController) => {
      let res: any
      service.get(42).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/products/42/reviews')
      req.flush({ data: 'apiResponse' })

      tick()
      expect(req.request.method).toBe('GET')
      expect(res).toBe('apiResponse')
      httpMock.verify()
    })
  ))

it('should create product reviews directly via the rest api', inject([ProductReviewService, HttpTestingController],
TypeScript
    fakeAsync((service: ProductReviewService, httpMock: HttpTestingController) => {
      let res: ProductReview;
      service.create(42, { message: 'A', author: 'B' }).subscribe((data: ProductReview) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/products/42/reviews')
      req.flush({ data: 'apiResponse' })
      tick()
      expect(req.request.method).toBe('PUT')
      expect(req.request.body).toEqual({ message: 'A', author: 'B' })
      expect(res).toBe('apiResponse')
      httpMock.verify()
    })
  ))

it('should edit product reviews directly via the rest api', inject([ProductReviewService, HttpTestingController],
TypeScript
fakeAsync((service: ProductReviewService, httpMock: HttpTestingController) => {
  let res: { id: string, message: string };
  service.patch({} as { id: string, message: string }).subscribe((data: { id: string, message: string }) => (res = data));
  const req = httpMock.expectOne('http://localhost:3000/rest/products/reviews');
  req.flush({ data: 'apiResponse' });
      tick()
      expect(req.request.method).toBe('PATCH')
      expect(req.request.body).toBe(null)
      expect(res).toBe('apiResponse')
      httpMock.verify()
    })
  ))
})
