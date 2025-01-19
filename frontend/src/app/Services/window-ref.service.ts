/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
TypeScript
export class WindowRefService {
  get nativeWindow (): Window | null {
    return getWindow()
  }
TypeScript
}

function getWindow (): Window | undefined {
  return window
}