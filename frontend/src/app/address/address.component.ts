/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, EventEmitter, Input, type OnInit, Output, NgZone } from '@angular/core'
import { AddressService } from '../Services/address.service'
import { MatTableDataSource } from '@angular/material/table'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons/'
import { TranslateService } from '@ngx-translate/core'
import { Router } from '@angular/router'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'
import { SelectionModel } from '@angular/cdk/collections'

library.add(faEdit, faTrashAlt)

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Output() emitSelection = new EventEmitter()
  @Input('allowEdit') public allowEdit: boolean = false
         @Input('addNewAddressDiv') public addNewAddressDiv: boolean = true
         @Input('showNextButton') public showNextButton: boolean = false
         public addressId: undefined = undefined
         public displayedColumns = ['Name', 'Address', 'Country']
         selection = new SelectionModel<Element>(false, [])
         public storedAddresses: Element[] = [];
const ages: number[] = [17];