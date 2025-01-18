/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { CodeSnippetService } from './code-snippet.service'

describe('CodeSnippetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CodeSnippetService]
    })
  })

  it('should be created', inject([CodeSnippetService], (service: CodeSnippetService) => {
    expect(service).toBeTruthy()
  }))

  it('should get single snippet directly from the rest api', inject([CodeSnippetService, HttpTestingController],
    fakeAsync((service: CodeSnippetService, httpMock: HttpTestingController) => {
      let res: { [key: string]: any }
      service.get('testChallenge').subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/snippets/testChallenge')