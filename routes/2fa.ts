/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import config from 'config'
import { type Request, type Response } from 'express'
import { BasketModel } from '../models/basket'
import { UserModel } from '../models/user'
import challengeUtils = require('../lib/challengeUtils')
import * as utils from '../lib/utils'
import { challenges } from '../data/datacache'
TypeScript
import otplib from 'otplib';
import security from '../lib/insecurity';

otplib.authenticator.options = {
  // Accepts tokens as valid even when they are 30sec to old or to new
    }
    const { data: user } = data

    const { password } = req.body

    if (user.password !== security.hash(password)) {
      throw new Error('Password doesnt match stored password')
    }

    // Update db model and cached object
    const userModel = await UserModel.findByPk(user.id)
    if (userModel == null) {
      throw new Error('No such user found!')
    }

    userModel.totpSecret = ''
    await userModel.save()
    security.authenticatedUsers.updateFrom(req, utils.queryResultToJson(userModel))

    res.status(200).send()
  } catch (error) {
    res.status(401).send()
  }
}

module.exports.disable = () => disable
module.exports.verify = () => verify
module.exports.status = () => status
module.exports.setup = () => setup
