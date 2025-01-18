/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { inject, TestBed, waitForAsync } from '@angular/core/testing'

import { LocalBackupService } from './local-backup.service'
import { CookieModule, CookieService } from 'ngx-cookie'
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import * as FileSaver from 'file-saver'
import { ChallengeService } from './challenge.service'

describe('LocalBackupService', () => {
  let snackBar: any
  let cookieService: any
  let challengeService: {[key: string]: unknown}

  beforeEach(() => {