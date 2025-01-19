/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { UserModel } from '../models/user'
import challengeUtils = require('../lib/challengeUtils')

import * as utils from '../lib/utils'
import security from '../lib/insecurity'
import cache from '../data/datacache'
const challenges = cache.challenges

module.exports = function saveLoginIp () {