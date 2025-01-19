/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { UntypedFormControl, Validators } from '@angular/forms'
import { Component, EventEmitter, Input, type OnInit, Output } from '@angular/core'
import { PaymentService } from '../Services/payment.service'
import { MatTableDataSource } from '@angular/material/table'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons/'
import { TranslateService } from '@ngx-translate/core'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'

library.add(faPaperPlane, faTrashAlt)

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})

export class PaymentMethodComponent implements OnInit {
  @Output() emitSelection = new EventEmitter()
  @Input('allowDelete') public allowDelete: boolean = false
  public displayedColumns = ['Number', 'Name', 'Expiry']
  public nameControl: UntypedFormControl = new UntypedFormControl('', [Validators.required])
  // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
  public numberControl: UntypedFormControl = new UntypedFormControl('', [Validators.required, Validators.min(1000000000000000), Validators.max(9999999999999999)])
         public monthControl: UntypedFormControl = new UntypedFormControl('', [Validators.required])
         public yearControl: UntypedFormControl = new UntypedFormControl('', [Validators.required])
         public confirmation: string
public error: string;
public storedCards: FormControl[];
public card: { [key: string]: number };
const ages: number[] = [17, 18, 19];