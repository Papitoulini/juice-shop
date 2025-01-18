/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import fs = require('fs')
import { type Request, type Response, type NextFunction } from 'express'
import { UserModel } from '../models/user'
import logger from '../lib/logger'

import * as utils from '../lib/utils'
import fileType = require('file-type')
const security = require('../lib/insecurity')

module.exports = function fileUpload () {
  return async (req: Request, res: Response, next: NextFunction) => {