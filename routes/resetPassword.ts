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
TypeScript
         import challengeUtils = require('../lib/challengeUtils');
         import { users } from '../data/datacache';
         import { security } from '../lib/insecurity';
        
         module.exports = function resetPassword () {