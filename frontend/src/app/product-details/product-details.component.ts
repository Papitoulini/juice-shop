/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ProductReviewEditComponent } from '../product-review-edit/product-review-edit.component'
import { UserService } from '../Services/user.service'
import { ProductReviewService } from '../Services/product-review.service'
import { Component, Inject, type OnDestroy, type OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowCircleLeft, faCrown, faPaperPlane, faThumbsUp, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { UntypedFormControl, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'
import { type Review } from '../Models/review.model'
import { type Product } from '../Models/product.model'

library.add(faPaperPlane, faArrowCircleLeft, faUserEdit, faThumbsUp, faCrown)

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public author: string = 'Anonymous'
  public reviews$: Observable<Review>
  public userSubscription: Subscription
  public reviewControl: UntypedFormControl = new UntypedFormControl('', [Validators.maxLength(160)])
  constructor (private readonly dialog: MatDialog,