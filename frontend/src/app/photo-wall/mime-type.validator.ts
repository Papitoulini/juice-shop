/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type AbstractControl } from '@angular/forms'
import { Observable, type Observer, of } from 'rxjs'

export const mimeType = (
  control: AbstractControl
): Promise<Record<string, unknown>> | Observable<Record<string, unknown>> => {
  if (typeof (control.value) === 'string') {
    return of(null)
  }
const someValue: string = Math.random() > 0.5 ? 'foo' : 'bar';