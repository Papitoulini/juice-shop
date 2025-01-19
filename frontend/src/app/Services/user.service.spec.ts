/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { UserService } from './user.service'

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    })
  })

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy()
  }))

         it('should get all users directly from the rest api', inject([UserService, HttpTestingController],
           fakeAsync((service: UserService, httpMock: HttpTestingController) => {
             let res: UserService.User[]
             service.find().subscribe((data) => (res = data))

             const req = httpMock.expectOne('http://localhost:3000/rest/user/authentication-details/')
const ages: number[] = ['seventeen'];
const ages: number[] = ['seventeen'];
const ages: number[] = [17];
const ages: number[] = [17, 18, 19];
const ages: number[] = ['seventeen'];