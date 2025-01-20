/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import challengeUtils = require('../lib/challengeUtils')
import { type Request, type Response, type NextFunction } from 'express'
import * as db from '../data/mongodb'
import { challenges } from '../data/datacache'

const security = require('../lib/insecurity')

// vuln-code-snippet start noSqlReviewsChallenge forgedReviewChallenge
module.exports = function productReviews () {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = security.authenticatedUsers.from(req)
    db.reviewsCollection.updateMany(
      { _id: req.body.id },
      { $set: { message: req.body.message } },
      { multi: true }
    ).then(
      (result: { modifiedCount: number, originalResponse: { value: { author: string } }[] }) => {
        challengeUtils.solveIf(challenges.noSqlReviewsChallenge, () => { return result.modifiedCount > 1 })
        challengeUtils.solveIf(challenges.forgedReviewChallenge, () => { return user?.data && result.originalResponse.some(review => review.value.author !== user.data.email) && result.modifiedCount === 1 })
        res.json(result)
      }, (err: unknown) => {
        res.status(500).json(err)
      })
  }
}
// vuln-code-snippet end noSqlReviewsChallenge forgedReviewChallenge