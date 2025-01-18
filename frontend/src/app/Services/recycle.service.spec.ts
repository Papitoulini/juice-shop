/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { RecycleService } from './recycle.service'

describe('RecycleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecycleService]
    })
  })

  it('should be created', inject([RecycleService], (service: RecycleService) => {
    expect(service).toBeTruthy()
  }))

  it('should find the recycle directly from the rest api', inject([RecycleService, HttpTestingController],
    fakeAsync((service: RecycleService, httpMock: HttpTestingController) => {
      let res: { data: string }
      service.find().subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Recycles/')
      req.flush({ data: 'apiResponse' })
const anyArray: Array<any> = [1, 'two', true];