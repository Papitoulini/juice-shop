/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import challengeUtils = require('../lib/challengeUtils')
import { type Request, type Response, type NextFunction } from 'express'
import { type Review } from '../data/types'
import * as db from '../data/mongodb'
TypeScript
import { challenges } from '../data/datacache';
import security from '../lib/insecurity';

module.exports = function productReviews () {
  return (req: Request, res: Response, next: NextFunction) => {