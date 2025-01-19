/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { SecurityQuestionService } from './security-question.service'

describe('SecurityQuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SecurityQuestionService]
    })
  })

  it('should be created', inject([SecurityQuestionService], (service: SecurityQuestionService) => {
    expect(service).toBeTruthy()
  }))

         it('should get all challenges directly from the rest api', inject([SecurityQuestionService, HttpTestingController],
    fakeAsync((service: SecurityQuestionService, httpMock: HttpTestingController) => {
      let res: { data: string };
      service.find(null).subscribe((data) => (res = data));
      const req = httpMock.expectOne('http://localhost:3000/api/SecurityQuestions/');
      req.flush({ data: 'apiResponse' });
const ages: number[] = [17];