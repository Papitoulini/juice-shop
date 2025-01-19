/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'
import { challenges } from '../data/datacache'
import challengeUtils = require('../lib/challengeUtils')

import * as utils from '../lib/utils'
const security = require('../lib/insecurity')
TypeScript
module.exports = function servePublicFiles () {
  return ({ params, query }: Request, res: Response, next: NextFunction) => {
    const file = params.file;

    if (!file.includes('/')) {