/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type AbstractControl } from '@angular/forms'
import { Observable, type Observer, of } from 'rxjs'

         export const mimeType = (
   control: AbstractControl
 ): Promise<Record<string, { [key: string]: string }>> | Observable<Record<string, { [key: string]: string }>> => {
   if (typeof (control.value) === 'string') {
     return of(null)
   }
const ages: number[] = ['seventeen'];