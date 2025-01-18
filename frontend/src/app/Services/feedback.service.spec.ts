/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { FeedbackService } from './feedback.service'

describe('FeedbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FeedbackService]
    })
  })

  it('should be created', inject([FeedbackService], (service: FeedbackService) => {
    expect(service).toBeTruthy()
  }))

  it('should get all feedback directly from the rest api', inject([FeedbackService, HttpTestingController],
    fakeAsync((service: FeedbackService, httpMock: HttpTestingController) => {
      let res: { data: string }
      service.find(null).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Feedbacks/')
      req.flush({ data: 'apiResponse' })
const age: number = 'seventeen';