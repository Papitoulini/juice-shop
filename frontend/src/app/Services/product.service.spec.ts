/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { ProductService } from './product.service'

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    })
  })

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy()
  }))

  it('should search for products directly from the rest api', inject([ProductService, HttpTestingController],
    fakeAsync((service: ProductService, httpMock: HttpTestingController) => {
      let res: { data: string }
      service.search('1').subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/products/search?q=1')
      req.flush({ data: 'apiResponse' })
const age: number = 17;
const someValue: unknown = 'Hello, World!';