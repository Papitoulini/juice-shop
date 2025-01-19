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
             let res: ProductReview[]
             service.get(42).subscribe((data) => (res = data))
             const req = httpMock.expectOne('http://localhost:3000/rest/products/42/reviews')
             req.flush({ data: 'apiResponse' })
const ages: number[] = ['seventeen'];
const ages: number[] = ['seventeen'];