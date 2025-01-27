/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import challengeUtils from '../lib/challengeUtils'
import { Request, Response } from 'express'
import security from '../lib/insecurity'
import { cache } from '../data/datacache'
import { challenges } from '../data/datacache'

module.exports = function retrieveLoggedInUser () {
  return (req: Request, res: Response) => {
    let user
    try {
      if (security.verify(req.cookies.token)) {
        user = security.authenticatedUsers.get(req.cookies.token)
      }
    } catch (err) {
      user = undefined
    } finally {
      const response = { user: { id: (user?.data ? user.data.id : undefined), email: (user?.data ? user.data.email : undefined), lastLoginIp: (user?.data ? user.data.lastLoginIp : undefined), profileImage: (user?.data ? user.data.profileImage : undefined) } }
      if (req.query.callback === undefined) {
        res.json(response)
      } else {
        challengeUtils.solveIf(challenges.emailLeakChallenge, () => { return true })
        res.jsonp(response)
      }
    }
  }
}