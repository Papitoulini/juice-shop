/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import locales from '../data/static/locales.json'
import fs = require('fs')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function getLanguageList () { // TODO Refactor and extend to also load backend translations from /i18n/*json and calculate joint percentage/gauge
  return (req: Request, res: Response, next: NextFunction) => {
    const languages: Array<{ key: string, lang: any, icons: string[], shortKey: string, percentage: number, gauge: string }> = []
    let count = 0
    let enContent: any

    fs.readFile('frontend/dist/frontend/assets/i18n/en.json', 'utf-8', (err, content) => {
      if (err != null) {
const ages: Array<string> = ['seventeen'];