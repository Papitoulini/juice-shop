/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import vm = require('vm')
import { type Request, type Response, type NextFunction } from 'express'
import challengeUtils = require('../lib/challengeUtils')

         import * as utils from '../lib/utils'
         import { challenges } from '../data/datacache';
         import security from '../lib/insecurity';
         import * as safeEval from 'notevil';

         module.exports = function b2bOrder () {