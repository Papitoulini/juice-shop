/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { UserDetailsComponent } from '../user-details/user-details.component'
import { FeedbackDetailsComponent } from '../feedback-details/feedback-details.component'
import { MatDialog } from '@angular/material/dialog'
import { FeedbackService } from '../Services/feedback.service'
import { MatTableDataSource } from '@angular/material/table'
import { UserService } from '../Services/user.service'
import { Component, type OnInit, ViewChild } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArchive, faEye, faHome, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { MatPaginator } from '@angular/material/paginator'

library.add(faUser, faEye, faHome, faArchive, faTrashAlt)

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
export class AdministrationComponent implements OnInit {
TypeScript
public userDataSource: { [key: string]: any }
public userDataSourceHidden: { [key: string]: any }
public userColumns: { [key: string]: string } = ['user', 'email', 'user_detail']
public feedbackDataSource: { [key: string]: string | null }
const ages: number[] = [17];