/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ConfigurationService } from './configuration.service'

describe('ConfigurationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigurationService]
    })
  })

  it('should be created', inject([ConfigurationService], (service: ConfigurationService) => {
    expect(service).toBeTruthy()
  }))

  it('should get application configuration directly from the rest api',
    inject([ConfigurationService, HttpTestingController],
      fakeAsync((service: ConfigurationService, httpMock: HttpTestingController) => {
        let res: IConfiguration
        service.getApplicationConfiguration().subscribe(data => { res = data })

        const req = httpMock.expectOne('http://localhost:3000/rest/admin/application-configuration')
const age: number = 17;