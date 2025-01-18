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

import * as utils from '../lib/utils'
import security = require('../lib/insecurity')
import jwt = require('jsonwebtoken')
const cache = require('../data/datacache')
const challenges = cache.challenges
const products = cache.products

function knownVulnerableComponentChallenge () {
  FeedbackModel.findAndCountAll({
    where: {
      comment: {
        [Op.or]: knownVulnerableComponents()
      }
    }
  }).then(({ count }: { count: number }) => {
    if (count > 0) {
      challengeUtils.solve(challenges.knownVulnerableComponentChallenge)
    }
  }).catch(() => {
    throw new Error('Unable to get data for known vulnerabilities. Please try again')
  })
  ComplaintModel.findAndCountAll({
    where: {
      message: {
        [Op.or]: knownVulnerableComponents()
      }
    }
  }).then(({ count }: { count: number }) => {
    if (count > 0) {
      challengeUtils.solve(challenges.knownVulnerableComponentChallenge)
    }
  }).catch(() => {
    throw new Error('Unable to get data for known vulnerabilities. Please try again')
  })
}

function knownVulnerableComponents () {
  return [
    {
      [Op.and]: [
        { [Op.like]: '%sanitize-html%' },
        { [Op.like]: '%1.4.2%' }
      ]
    },
    {
      [Op.and]: [
        { [Op.like]: '%express-jwt%' },
        { [Op.like]: '%0.1.3%' }
      ]
    }
  ]
}

function weirdCryptoChallenge () {
  FeedbackModel.findAndCountAll({
    where: {
      comment: {
        [Op.or]: weirdCryptos()
      }
    }
  }).then(({ count }: { count: number }) => {
    if (count > 0) {
      challengeUtils.solve(challenges.weirdCryptoChallenge)
    }
  }).catch(() => {
    throw new Error('Unable to get data for known vulnerabilities. Please try again')
  })
  ComplaintModel.findAndCountAll({
    where: {
      message: {
        [Op.or]: weirdCryptos()
      }
    }
  }).then(({ count }: { count: number }) => {
    if (count > 0) {
      challengeUtils.solve(challenges.weirdCryptoChallenge)
    }
  }).catch(() => {
    throw new Error('Unable to get data for known vulnerabilities. Please try again')
  })
}

function weirdCryptos () {
  return [
    { [Op.like]: '%z85%' },
    { [Op.like]: '%base85%' },
    { [Op.like]: '%hashids%' },
    { [Op.like]: '%md5%' },
    { [Op.like]: '%base64%' }
  ]
}

function typosquattingNpmChallenge () {
  FeedbackModel.findAndCountAll({ where: { comment: { [Op.like]: '%epilogue-js%' } } }
  ).then(({ count }: { count: number }) => {
    if (count > 0) {
      challengeUtils.solve(challenges.typosquattingNpmChallenge)
    }
  }).catch(() => {
    throw new Error('Unable to get data for known vulnerabilities. Please try again')
  })
  // ComplaintModel.findAndCountAll({ where: { message: { [Op.like]: '%epilogue-js%' } } }