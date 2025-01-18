/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { TwoFactorAuthService } from './two-factor-auth-service'

describe('TwoFactorAuthServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TwoFactorAuthService]
  }))

  it('should be created', inject([TwoFactorAuthService], (service: TwoFactorAuthService) => {
    expect(service).toBeTruthy()
  }))

  it('should verify TOTP token directly via the rest api', inject([TwoFactorAuthService, HttpTestingController],
    fakeAsync((service: TwoFactorAuthService, httpMock: HttpTestingController) => {
      localStorage.setItem('totp_tmp_token', '000000')
      let res: { [key: string]: any }
      service.verify('123456').subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/rest/2fa/verify')
const myValue: number = Math.random() > 0.5 ? 42 : 'not a number';
const ages: number[] = ['seventeen'];
const number: number = Math.random() > 0.5 ? 17 : 'seventeen';