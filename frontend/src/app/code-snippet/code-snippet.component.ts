/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { CodeSnippetService, type CodeSnippet } from '../Services/code-snippet.service'
import { CodeFixesService } from '../Services/code-fixes.service'
import { CookieService } from 'ngx-cookie'
import { ChallengeService } from '../Services/challenge.service'
import { VulnLinesService, type result } from '../Services/vuln-lines.service'
import { Component, Inject, type OnInit } from '@angular/core'

import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { UntypedFormControl } from '@angular/forms'
import { ConfigurationService } from '../Services/configuration.service'
import { type ThemePalette } from '@angular/material/core'

enum ResultState {
  Undecided,
  Right,
  Wrong,
}

export interface Solved {
  findIt: boolean
  fixIt: boolean
}

export interface RandomFixes {
  fix: string
  index: number
}

@Component({
  selector: 'code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss'],
  host: { class: 'code-snippet' }
})
export class CodeSnippetComponent implements OnInit {
  public snippet: CodeSnippet = null
  public fixes: string [] = null
  public selectedLines: number[]
  public selectedFix: number = 0
  public tab: UntypedFormControl = new UntypedFormControl(0)
  public lock: ResultState = ResultState.Undecided
  public result: ResultState = ResultState.Undecided
  public hint: string = null
  public explanation: string = null
  public solved: Solved = { findIt: false, fixIt: false }
  public showFeedbackButtons: boolean = true
         public randomFixes: RandomFixes[] = []

         constructor (@Inject(MAT_DIALOG_DATA) public dialogData: RandomFixes, private readonly configurationService: ConfigurationService, private readonly codeSnippetService: CodeSnippetService, private readonly vulnLinesService: VulnLinesService, private readonly codeFixesService: CodeFixesService, private readonly challengeService: ChallengeService, private readonly cookieService: CookieService) { }

         ngOnInit () {
           this.configurationService.getApplicationConfiguration().subscribe((config) => {