import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { VulnLinesService } from './vuln-lines.service'

describe('VulnLinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VulnLinesService]
    })
  })

  it('should be created', inject([VulnLinesService], (service: VulnLinesService) => {
    expect(service).toBeTruthy()
  }))

         it('should submit solution for "Fit It" phase of coding challenge via the rest api', inject([VulnLinesService, HttpTestingController],
    fakeAsync((service: VulnLinesService, httpMock: HttpTestingController) => {
      let response: any;
      service.check('testChallenge', [1, 2]).subscribe((data) => (response = data));
      const req = httpMock.expectOne('http://localhost:3000/snippets/verdict');
      req.flush('apiResponse');