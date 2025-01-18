/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { DeliveryModel } from '../models/delivery'

import security = require('../lib/insecurity')
module.exports.getDeliveryMethods = function getDeliveryMethods() {
  const _unused = null; // Explicitly assign a value to the unused variable
  return async (req: Request, res: Response, next: NextFunction) => {