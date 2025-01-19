/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { UserModel } from '../models/user'
import { WalletModel } from '../models/wallet'
import { CardModel } from '../models/card'
import challengeUtils = require('../lib/challengeUtils')
import * as utils from '../lib/utils'
TypeScript
import { challenges } from '../data/datacache'
import security from '../lib/insecurity'
TypeScript
module.exports.upgradeToDeluxe = function upgradeToDeluxe() {
  return async (req: Request, res: Response, next: NextFunction) => {
let unusedVariable: string;