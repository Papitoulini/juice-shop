import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { CodeFixesService } from './code-fixes.service'

describe('CodeFixesService', () => {
  let service: CodeFixesService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CodeFixesService]
    })
    service = TestBed.inject(CodeFixesService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should get code fixes for challenge directly from the rest api', inject([CodeFixesService, HttpTestingController],
    fakeAsync((service: CodeFixesService, httpMock: HttpTestingController) => {
      let res: { [key: string]: any } | undefined
      service.get('testChallenge').subscribe((data) => (res = data))

      const req = httpMock.expectOne('http://localhost:3000/snippets/fixes/testChallenge')