/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { DeliveryModel } from '../models/delivery'

const security = require('../lib/insecurity')
module.exports.getDeliveryMethods = function getDeliveryMethods () {
  return async (req: Request, res: Response, next: NextFunction) => {
    const methods = await DeliveryModel.findAll()
    if (methods) {
      const sendMethods = []
      // rest of the code...
let unusedVariable: string;