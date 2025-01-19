/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { UntypedFormControl, Validators } from '@angular/forms'
import { Component, NgZone, type OnInit } from '@angular/core'
import { ConfigurationService } from '../Services/configuration.service'
import { BasketService } from '../Services/basket.service'
import { TranslateService } from '@ngx-translate/core'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCartArrowDown,
  faCoffee,
  faGift,
  faHandHoldingUsd,
  faHeart,
  faStickyNote,
  faThumbsUp,
  faTimes,
  faTshirt,
  faPalette
} from '@fortawesome/free-solid-svg-icons'
import { faLeanpub, faStripe } from '@fortawesome/free-brands-svg-icons'
import { QrCodeComponent } from '../qr-code/qr-code.component'
import { MatDialog } from '@angular/material/dialog'
import { ActivatedRoute, type ParamMap, Router } from '@angular/router'
import { WalletService } from '../Services/wallet.service'
import { DeliveryService } from '../Services/delivery.service'
import { UserService } from '../Services/user.service'
import { CookieService } from 'ngx-cookie'
import { Location } from '@angular/common'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'

library.add(faCartArrowDown, faGift, faHeart, faLeanpub, faThumbsUp, faTshirt, faStickyNote, faHandHoldingUsd, faCoffee, faTimes, faStripe, faPalette)

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
         public couponConfirmation: string
         public couponError: string
         public card: Record<string, unknown>
         public twitterUrl: null
         public facebookUrl: null
const ages: number[] = [17, 18, 19];
const ages: number[] = [17];
const ages: number[] = ['seventeen'];
const ages: number[] = [17, 18, 19];