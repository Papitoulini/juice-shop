/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, type OnInit, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.scss']
TypeScript
TypeScript
export class FeedbackDetailsComponent implements OnInit {
  public feedback: string
  public id: number
  constructor (@Inject(MAT_DIALOG_DATA) public dialogData: { id: number, feedback: string }) { }
  ngOnInit () {
    this.feedback = this.dialogData.feedback
    this.id = this.dialogData.id
  }
}
