/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import utils = require('../lib/utils')
import challengeUtils = require('../lib/challengeUtils')
import { type Request, type Response, type NextFunction } from 'express'
import { challenges } from '../data/datacache'

import security = require('../lib/insecurity')

module.exports = function performRedirect () {
  return ({ query }: Request, res: Response, next: NextFunction) => {