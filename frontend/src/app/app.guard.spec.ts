/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { inject, TestBed } from '@angular/core/testing'
import { AccountingGuard, AdminGuard, DeluxeGuard, LoginGuard } from './app.guard'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { ErrorPageComponent } from './error-page/error-page.component'

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: '403', component: ErrorPageComponent }
        ]
        )],
      providers: [LoginGuard]
    })
  })

  it('should be created', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy()
  }))

  it('should open for authenticated users', inject([LoginGuard], (guard: LoginGuard) => {
    localStorage.setItem('token', 'TOKEN')
    expect(guard.canActivate()).toBeTrue()
  }))

  it('should close for anonymous users', inject([LoginGuard], (guard: LoginGuard) => {
    localStorage.removeItem('token')
    expect(guard.canActivate()).toBeFalse()
  }))

  it('returns payload from decoding a valid JWT', inject([LoginGuard], (guard: LoginGuard) => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c')
    expect(guard.tokenDecode()).toEqual({
      sub: '1234567890',
      name: 'John Doe',
      iat: 1516239022
    })
  }))

  it('returns nothing when decoding an invalid JWT', inject([LoginGuard], (guard: LoginGuard) => {
    localStorage.setItem('token', '12345.abcde')
    expect(guard.tokenDecode()).toBeNull()
  }))

  it('returns nothing when decoding an non-existing JWT', inject([LoginGuard], (guard: LoginGuard) => {
    localStorage.removeItem('token')
    expect(guard.tokenDecode()).toBeNull()
  }))
})
TypeScript
describe('AdminGuard', () => {
  let loginGuard: jasmine.SpyObj<LoginGuard>

  beforeEach(() => {
    loginGuard = jasmine.createSpyObj('LoginGuard', ['tokenDecode', 'forbidRoute'])
         const ages: number[] = [17];
         const ages: number[] = [17];