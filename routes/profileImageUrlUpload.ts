/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import fs = require('fs')
import { type Request, type Response, type NextFunction } from 'express'
import logger from '../lib/logger'
import * as url from 'url'

import { UserModel } from '../models/user'
import * as utils from '../lib/utils'
const security = require('../lib/insecurity')
const request = require('request')

module.exports = function profileImageUrlUpload () {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.body.imageUrl !== undefined) {
      const parsedUrl = url.parse(req.body.imageUrl)
      if (!parsedUrl.hostname || ['localhost', '127.0.0.1'].includes(parsedUrl.hostname)) {
        if (req.body.imageUrl.match(/(.)*solve\/challenges\/server-side(.)*/) !== null) req.app.locals.abused_ssrf_bug = true
        const loggedInUser = security.authenticatedUsers.get(req.cookies.token)
        if (loggedInUser) {
          const imageRequest = request
            .get(req.body.imageUrl)
            .on('error', function (err: unknown) {
              UserModel.findByPk(loggedInUser.data.id).then(async (user: UserModel | null) => { return await user?.update({ profileImage: req.body.imageUrl }) }).catch((error: Error) => { next(error) })
              logger.warn(`Error retrieving user profile image: ${utils.getErrorMessage(err)}; using image link directly`)
            })
            .on('response', function (res: Response) {
              if (res.statusCode === 200) {
                const ext = ['jpg', 'jpeg', 'png', 'svg', 'gif'].includes(req.body.imageUrl.split('.').slice(-1)[0].toLowerCase()) ? req.body.imageUrl.split('.').slice(-1)[0].toLowerCase() : 'jpg'
                imageRequest.pipe(fs.createWriteStream(`frontend/dist/frontend/assets/public/images/uploads/${loggedInUser.data.id}.${ext}`))
                UserModel.findByPk(loggedInUser.data.id).then(async (user: UserModel | null) => { return await user?.update({ profileImage: `/assets/public/images/uploads/${loggedInUser.data.id}.${ext}` }) }).catch((error: Error) => { next(error) })
              } else UserModel.findByPk(loggedInUser.data.id).then(async (user: UserModel | null) => { return await user?.update({ profileImage: req.body.imageUrl }) }).catch((error: Error) => { next(error) })
            })
        } else {
          next(new Error('Blocked illegal activity by ' + req.socket.remoteAddress))
        }
      } else {
        next(new Error('Blocked illegal remote activity by ' + req.socket.remoteAddress))
      }
    }
    res.location(process.env.BASE_PATH + '/profile')
    res.redirect(process.env.BASE_PATH + '/profile')
  }
}