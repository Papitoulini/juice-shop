/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import Hashids = require('hashids/cjs')
import { type Request, type Response } from 'express'
import { challenges } from '../data/datacache'

import challengeUtils = require('../lib/challengeUtils')

module.exports.restoreProgress = function restoreProgress () {
  return ({ params }: Request, res: Response) => {