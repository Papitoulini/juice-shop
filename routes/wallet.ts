/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { WalletModel } from '../models/wallet'
import { CardModel } from '../models/card'
module.exports.getWalletBalance = function getWalletBalance () {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { UserId } = req.body;
    const wallet = await WalletModel.findOne({ where: { UserId } })
    if (wallet != null) {
      res.status(200).json({ status: 'success', data: wallet.balance })