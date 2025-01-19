/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { ChallengeService } from './challenge.service'

describe('ChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ChallengeService]
    })
  })

  it('should be created', inject([ChallengeService], (service: ChallengeService) => {
    expect(service).toBeTruthy()
  }))

         it('should get all challenges directly from the rest api', inject([ChallengeService, HttpTestingController],
    fakeAsync((service: ChallengeService, httpMock: HttpTestingController) => {
      let res: Challenge[]
      service.find().subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/api/Challenges/')
const ages: number[] = ['seventeen'];
const ages: number[] = [17, 'eighteen'];
const ages: number[] = ['seventeen'];