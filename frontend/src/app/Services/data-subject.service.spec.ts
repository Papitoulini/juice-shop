/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'
import { DataSubjectService } from './data-subject.service'

describe('DataSubjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataSubjectService]
    })
  })

  it('should be created', inject([DataSubjectService], (service: DataSubjectService) => {
    expect(service).toBeTruthy()
  }))

  it('should pass the erasure request directly to the rest API', inject([DataSubjectService, HttpTestingController],
    fakeAsync((service: DataSubjectService, httpMock: HttpTestingController) => {
      let res: string
      service.erase({}).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/user/erasure-request')
      req.flush('apiResponse')
const numbers: Array<number> = ['seventeen'];