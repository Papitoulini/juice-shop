/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { ChatbotService } from './chatbot.service'

describe('ChatbotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChatbotService]
    })
  })

  it('should be created', inject([ChatbotService], (service: ChatbotService) => {
    expect(service).toBeTruthy()
  }))

  it('should get status from the REST API', inject([ChatbotService, HttpTestingController],
    fakeAsync((service: ChatbotService, httpMock: HttpTestingController) => {
      let res: { status: boolean, body: string }
      service.getChatbotStatus().subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/chatbot/status')
      req.flush({ status: true, body: 'apiResponse' })