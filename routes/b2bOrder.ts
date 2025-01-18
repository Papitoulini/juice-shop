/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import vm = require('vm')
import { type Request, type Response, type NextFunction } from 'express'
import challengeUtils = require('../lib/challengeUtils')

import * as utils from '../lib/utils'
import { challenges } from '../data/datacache'
import security = require('../lib/insecurity')
import safeEval = require('notevil')

module.exports = function b2bOrder () {