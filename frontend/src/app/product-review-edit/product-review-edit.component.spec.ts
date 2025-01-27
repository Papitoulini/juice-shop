describe('ProductReviewEditComponent', () => {
  let component: ProductReviewEditComponent
  let fixture: ComponentFixture<ProductReviewEditComponent>
  let productReviewService: ProductReviewService
  let dialogRef: MatDialogRef<ProductReviewEditComponent>

  beforeEach(waitForAsync(() => {
    productReviewService = TestBed.inject(ProductReviewService)
    dialogRef = TestBed.inject(MatDialogRef)

    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule
      ],
      declarations: [ProductReviewEditComponent],
      providers: [
        { provide: ProductReviewService, useValue: productReviewService },
        { provide: MAT_DIALOG_DATA, useValue: { productData: {} } },
        { provide: MatDialogRef, useValue: dialogRef }
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReviewEditComponent)
    component = fixture.componentInstance
    component.data = { reviewData: { _id: '42', message: 'Review', author: 'Horst' } }
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should be initialized with data from the passed review', () => {
    component.data = { reviewData: { _id: '42', message: 'Review', author: 'Horst' } }
    component.ngOnInit()
    expect(component.editReviewControl.value).toBe('Review')
  })

  it('should update review through backend API', () => {
    component.data = { reviewData: { _id: '42', message: 'Review', author: 'Horst' } }
    component.ngOnInit()
    component.editReviewControl.setValue('Another Review')
    component.editReview()
    expect(productReviewService.patch).toHaveBeenCalledTimes(1)
    expect(productReviewService.patch).toHaveBeenCalledWith({ id: '42', message: 'Another Review' })
  })

  it('should close the dialog on submitting the edited review', () => {
    productReviewService.patch.and.returnValue(of({}))
    component.data = { reviewData: { _id: '42', message: 'Review', author: 'Horst' } }
    component.ngOnInit()
    component.editReview()
    expect(dialogRef.close).toHaveBeenCalledTimes(1)
  })

  it('should log errors directly to browser console', fakeAsync(() => {
    component.data = { reviewData: { _id: '42', message: 'Review', author: 'Horst' } }
    console.log = jasmine.createSpy('log')
    productReviewService.patch.and.returnValue(throwError('Error'))
    component.ngOnInit()
    component.editReview()
    expect(console.log).toHaveBeenCalledTimes(1)
    expect(console.log).toHaveBeenCalledWith('Error')
    fixture.destroy()
    flush()
  }))
})