/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import config from 'config'
import { type Request, type Response, type NextFunction } from 'express'
import type { Memory as MemoryConfig } from '../lib/config.types'
import { SecurityAnswerModel } from '../models/securityAnswer'
import { UserModel } from '../models/user'
import { challenges } from '../data/datacache'

import challengeUtils = require('../lib/challengeUtils')
import users = require('../data/datacache').users
import security = require('../lib/insecurity')

module.exports = function resetPassword () {
  return ({ body, connection }: Request, res: Response, next: NextFunction) => {