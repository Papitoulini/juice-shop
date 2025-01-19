/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
TypeScript
import { BasketModel } from '../models/basket';
import security from '../lib/insecurity';

module.exports = function applyCoupon () {
  return ({ params }: Request, res: Response, next: NextFunction) => {