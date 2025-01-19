/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { UntypedFormControl, Validators } from '@angular/forms'
import { Component, type OnInit } from '@angular/core'
import { FormSubmitService } from '../Services/form-submit.service'
import { AddressService } from '../Services/address.service'
import { ActivatedRoute, type ParamMap, Router } from '@angular/router'
import { Location } from '@angular/common'
import { TranslateService } from '@ngx-translate/core'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'

@Component({
  selector: 'app-address-create',
  templateUrl: './address-create.component.html',
  styleUrls: ['./address-create.component.scss']
})
export class AddressCreateComponent implements OnInit {
  public countryControl: UntypedFormControl = new UntypedFormControl('', [Validators.required])
  public nameControl: UntypedFormControl = new UntypedFormControl('', [Validators.required])
  public numberControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.min(1111111), Validators.max(9999999999)])
  public pinControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.maxLength(8)])
  public addressControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.maxLength(160)])
TypeScript
  public cityControl: UntypedFormControl = new UntypedFormControl('', [Validators.required])
  public stateControl: UntypedFormControl = new UntypedFormControl()
  public address: string | undefined = undefined
  public mode = 'create'
  private addressId: string | undefined = undefined