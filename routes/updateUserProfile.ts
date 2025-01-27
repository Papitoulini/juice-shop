/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { UserModel } from '../models/user'
import { challengeUtils } from '../lib/challengeUtils'
import { utils } from '../lib/utils'
import security = require('../lib/insecurity')
import { cache } from '../data/datacache'
import { challenges } from '../data/datacache'

const updateUserProfile = function (req: Request, res: Response, next: NextFunction) {
  const loggedInUser = security.authenticatedUsers.get(req.cookies.token)

  if (loggedInUser) {
    UserModel.findByPk(loggedInUser.data.id).then((user: UserModel | null) => {
      if (user != null) {
        challengeUtils.solveIf(challenges.csrfChallenge, () => {
          return ((req.headers.origin?.includes('://htmledit.squarefree.com')) ??
            (req.headers.referer?.includes('://htmledit.squarefree.com'))) &&
            req.body.username !== user.username
        })
        void user.update({ username: req.body.username }).then((savedUser: UserModel) => {
          // @ts-expect-error FIXME some properties missing in savedUser
          savedUser = utils.queryResultToJson(savedUser)
          const updatedToken = security.authorize(savedUser)
          security.authenticatedUsers.put(updatedToken, savedUser)
          res.cookie('token', updatedToken)
          res.location(process.env.BASE_PATH + '/profile')
          res.redirect(process.env.BASE_PATH + '/profile')
        })
      }
    }).catch((error: Error) => {
      next(error)
    })
  } else {
    next(new Error('Blocked illegal activity by ' + req.socket.remoteAddress))
  }
}

export { updateUserProfile }