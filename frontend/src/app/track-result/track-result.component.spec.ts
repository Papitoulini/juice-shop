describe('TrackResultComponent', () => {
  let component: TrackResultComponent
  let fixture: ComponentFixture<TrackResultComponent>
  let trackOrderService: TrackOrderService
  let sanitizer: DomSanitizer

  beforeEach(waitForAsync(() => {
    trackOrderService = TestBed.inject(TrackOrderService)
    sanitizer = TestBed.inject(DomSanitizer)

    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        MatCardModule,
        MatTableModule
      ],
      declarations: [TrackResultComponent],
      providers: [
        { provide: TrackOrderService, useValue: trackOrderService },
        { provide: DomSanitizer, useValue: sanitizer }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackResultComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should consider order number as trusted HTML', () => {
    component.orderId = '<a src="link">Link</a>'
    trackOrderService.find.and.returnValue(of({ data: [{ orderId: component.orderId }] }))
    component.ngOnInit()

    expect(sanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith('<code><a src="link">Link</a></code>')
  })

  it('should set "delivered" status for delivered orders', () => {
    trackOrderService.find.and.returnValue(of({ data: [{ delivered: true }] }))
    component.ngOnInit()

    expect(component.status).toBe(Status.Delivered)
  })

  it('should set "packing" status for undelivered orders with ETA over 2 days', () => {
    trackOrderService.find.and.returnValue(of({ data: [{ eta: 3 }] }))
    component.ngOnInit()

    expect(component.status).toBe(Status.Packing)
  })

  it('should set "transit" status for undelivered orders with ETA under 3 days', () => {
    trackOrderService.find.and.returnValue(of({ data: [{ eta: 2 }] }))
    component.ngOnInit()

    expect(component.status).toBe(Status.Transit)
  })
})