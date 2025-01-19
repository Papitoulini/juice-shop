/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ConfigurationService } from '../Services/configuration.service'
import { UserService } from '../Services/user.service'
import { RecycleService } from '../Services/recycle.service'
import { Component, type OnInit, ViewChild } from '@angular/core'
import { UntypedFormControl, Validators } from '@angular/forms'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FormSubmitService } from '../Services/form-submit.service'
import { AddressComponent } from '../address/address.component'
import { TranslateService } from '@ngx-translate/core'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'

library.add(faPaperPlane)

@Component({
  selector: 'app-recycle',
  templateUrl: './recycle.component.html',
  styleUrls: ['./recycle.component.scss']
})
export class RecycleComponent implements OnInit {
  @ViewChild('addressComp', { static: true }) public addressComponent: AddressComponent
  public requestorControl: UntypedFormControl = new UntypedFormControl({ value: '', disabled: true }, [])
  public recycleQuantityControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.min(10), Validators.max(1000)])
  public pickUpDateControl: UntypedFormControl = new UntypedFormControl()
  public pickup: UntypedFormControl = new UntypedFormControl(false)
         public topImage?: string
         public bottomImage?: string
         public recycles: { [key: string]: string }
         public recycle: { [key: string]: string } = {};
public userEmail: string;
public confirmation: boolean;
const ages: number[] = [17];
const ages: number[] = [17, 18, 19];