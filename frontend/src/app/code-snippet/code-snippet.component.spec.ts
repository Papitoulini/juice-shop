/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateModule } from '@ngx-translate/core'
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { MatDividerModule } from '@angular/material/divider'
import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { CodeSnippetComponent } from './code-snippet.component'
import { CodeSnippetService } from '../Services/code-snippet.service'
import { CookieModule, CookieService } from 'ngx-cookie'
import { ConfigurationService } from '../Services/configuration.service'
import { of, throwError } from 'rxjs'
import { CodeFixesService } from '../Services/code-fixes.service'
import { VulnLinesService } from '../Services/vuln-lines.service'
import { ChallengeService } from '../Services/challenge.service'

describe('CodeSnippetComponent', () => {
  let component: CodeSnippetComponent
  let fixture: ComponentFixture<CodeSnippetComponent>
  let configurationService: ConfigurationService
  let cookieService: CookieService | null = null
  let codeSnippetService: CodeSnippetService | null = null
  let codeFixesService: CodeFixesService | null = null