/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { ordersCollection } from '../data/mongodb'

const security = require('../lib/insecurity')

module.exports.orderHistory = function orderHistory () {
  return async (req: Request, res: Response, next: NextFunction) => {
    const loggedInUser = security.authenticatedUsers.get(req.headers?.authorization?.replace('Bearer ', ''))
    if (loggedInUser?.data?.email && loggedInUser.data.id) {
      const email = loggedInUser.data.email
      const updatedEmail = email.replace(/[aeiou]/gi, '*')
      const order = await ordersCollection.find({ email: updatedEmail })
      res.status(200).json({ status: 'success', data: order })
    } else {
      next(new Error('Blocked illegal activity by ' + req.socket.remoteAddress))
    }
  }
}
TypeScript
module.exports.allOrders = function allOrders () {
  return async (req: Request, res: Response, next: NextFunction) => {
    const order = await ordersCollection.find().toArray()
    res.status(200).json({ status: 'success', data: order.reverse() })
  }
let unusedVariable: string = '';