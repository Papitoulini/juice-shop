import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing'

import { ProductService } from './product.service'

describe('ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    })
  })

  it('should be created', inject([ProductService], (service: ProductService) => {
    expect(service).toBeTruthy()
  }))

  it('should search for products directly from the rest api', inject([ProductService, HttpTestingController],
    fakeAsync((service: ProductService, httpMock: HttpTestingController) => {
      let res: any
      service.search('1').subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/rest/products/search?q=1')
      req.flush({ data: 'apiResponse' })

      tick()
      expect(req.request.method).toBe('GET')
      expect(res).toBe('apiResponse')
      httpMock.verify()
    })
  ))

  it('should get all products directly from the rest api', inject([ProductService, HttpTestingController],
    fakeAsync((service: ProductService, httpMock: HttpTestingController) => {
      let res: number[]
      service.find(null).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Products/')
      req.flush([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }])

      tick()
      expect(req.request.method).toBe('GET')
      expect(req.request.params.toString()).toBeFalsy()
      expect(res).toEqual([1, 2])
      httpMock.verify()
    })
  ))

  it('should get single product directly from the rest api', inject([ProductService, HttpTestingController],
    fakeAsync((service: ProductService, httpMock: HttpTestingController) => {
      let res: any
      service.get(1).subscribe((data) => (res = data))
      const req = httpMock.expectOne('http://localhost:3000/api/Products/1?d=' + encodeURIComponent(new Date().toDateString()))
      req.flush({ id: 1, name: 'Product 1' })

      tick()
      expect(req.request.method).toBe('GET')
      expect(res).toEqual({ id: 1, name: 'Product 1' })
      httpMock.verify()
    })
  ))
})