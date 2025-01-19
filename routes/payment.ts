/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { CardModel } from '../models/card'

interface displayCard {
  UserId: number
  id: number
  fullName: string
  cardNum: string
  expMonth: number
  expYear: number
}

module.exports.getPaymentMethods = function getPaymentMethods () {
  return async (req: Request, res: Response, next: NextFunction) => {
    const displayableCards: displayCard[] = []
    const cards = await CardModel.findAll({ where: { UserId: req.body.UserId } })
    cards.forEach(card => {
      const displayableCard: displayCard = {
        UserId: card.UserId,
        id: card.id,
        fullName: card.fullName,
        cardNum: '',
        expMonth: card.expMonth,
        expYear: card.expYear
      }
      const cardNumber = String(card.cardNum)
      displayableCard.cardNum = '*'.repeat(12) + cardNumber.substring(cardNumber.length - 4)
      displayableCards.push(displayableCard)
    })
    res.status(200).json({ status: 'success', data: displayableCards })
  }
}
TypeScript
module.exports.getPaymentMethodById = function getPaymentMethodById () {
  return async (req: Request, res: Response, next: NextFunction) => {
    const card = await CardModel.findOne({ where: { id: req.params.id, UserId: req.body.UserId } })
    const displayableCard: { UserId: number } = {
      UserId: 0,
let unusedVariable: string;