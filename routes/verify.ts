/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { type Challenge, type Product } from '../data/types'
import type { Product as ProductConfig } from '../lib/config.types'
import { type JwtPayload, type VerifyErrors } from 'jsonwebtoken'
import { FeedbackModel } from '../models/feedback'
import { ComplaintModel } from '../models/complaint'
import { Op } from 'sequelize'
import challengeUtils = require('../lib/challengeUtils')
import config from 'config'
import jws from 'jws'
TypeScript
import * as utils from '../lib/utils'
TypeScript
import security from '../lib/insecurity';
import jwt from 'jsonwebtoken';
import { cache } from '../data/datacache';
import { challenges } from '../data/datacache';
function feedbackChallenge () {
      comment: { [Op.and]: dangerousIngredients() }
    }
  }).then(({ count }: { count: number }) => {
    if (count > 0) {
      challengeUtils.solve(challenges.dlpPastebinDataLeakChallenge)
    }
  }).catch(() => {
    throw new Error('Unable to get data for known vulnerabilities. Please try again')
  })
  ComplaintModel.findAndCountAll({
    where: {
      message: { [Op.and]: dangerousIngredients() }
    }
  }).then(({ count }: { count: number }) => {
    if (count > 0) {
      challengeUtils.solve(challenges.dlpPastebinDataLeakChallenge)
    }
  }).catch(() => {
    throw new Error('Unable to get data for known vulnerabilities. Please try again')
  })
}

function csafChallenge () {
  FeedbackModel.findAndCountAll({ where: { comment: { [Op.like]: '%' + config.get<string>('challenges.csafHashValue') + '%' } } }
  ).then(({ count }: { count: number }) => {
    if (count > 0) {
      challengeUtils.solve(challenges.csafChallenge)
    }
  }).catch(() => {
    throw new Error('Unable to get data for known vulnerabilities. Please try again')
  })
  ComplaintModel.findAndCountAll({ where: { message: { [Op.like]: '%' + config.get<string>('challenges.csafHashValue') + '%' } } }
  ).then(({ count }: { count: number }) => {
    if (count > 0) {
      challengeUtils.solve(challenges.csafChallenge)
    }
  }).catch(() => {
    throw new Error('Unable to get data for known vulnerabilities. Please try again')
  })
}

function dangerousIngredients () {
  return config.get<ProductConfig[]>('products')
    .flatMap((product) => product.keywordsForPastebinDataLeakChallenge)
    .filter(Boolean)
    .map((keyword) => {
      return { [Op.like]: `%${keyword}%` }
    })
}

let unusedVariable: string = 'Hello';