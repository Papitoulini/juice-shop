/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { BasketService } from './basket.service'

describe('BasketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BasketService]
    })
  })

  it('should be created', inject([BasketService], (service: BasketService) => {
    expect(service).toBeTruthy()
  }))

         it('should get basket directly from the rest api', inject([BasketService, HttpTestingController],
           fakeAsync((service: BasketService, httpMock: HttpTestingController) => {
             let res: any
             service.find(1).subscribe((data) => (res = data))
             const req = httpMock.expectOne('http://localhost:3000/rest/basket/1')
             req.flush({ data: 'apiResponse' })
const ages: number[] = ['seventeen'];
const ages: number[] = [17];