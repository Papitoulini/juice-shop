/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class FormSubmitService {
         constructor (@Inject(DOCUMENT) private readonly _document: HTMLDocument) { }

         attachEnterKeyHandler (formId: string, submitButtonId: string, onSubmit: (event: Event) => void) {
           const form = this._document.getElementById(formId) as HTMLFormElement
           const submitButton = this._document.getElementById(submitButtonId) as HTMLInputElement
         }