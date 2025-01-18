/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { retrieveChallengesWithCodeSnippet } from './vulnCodeSnippet'
import { type Request, type Response, type NextFunction } from 'express'
import { ChallengeModel } from '../models/challenge'
import { UserModel } from '../models/user'
import { WalletModel } from '../models/wallet'
import { FeedbackModel } from '../models/feedback'
import { ComplaintModel } from '../models/complaint'
import { Op } from 'sequelize'
import challengeUtils = require('../lib/challengeUtils')
import logger from '../lib/logger'
import config from 'config'
import * as utils from '../lib/utils'
import { totalCheatScore } from '../lib/antiCheat'
import * as accuracy from '../lib/accuracy'
import { reviewsCollection, ordersCollection } from '../data/mongodb'
import { challenges } from '../data/datacache'
import * as Prometheus from 'prom-client'
import onFinished from 'on-finished'

const register = Prometheus.register

const fileUploadsCountMetric = new Prometheus.Counter({
  name: 'file_uploads_count',
  help: 'Total number of successful file uploads grouped by file type.',
  labelNames: ['file_type']
})

const fileUploadErrorsMetric = new Prometheus.Counter({
  name: 'file_upload_errors',
  help: 'Total number of failed file uploads grouped by file type.',
  labelNames: ['file_type']
})

exports.observeRequestMetricsMiddleware = function observeRequestMetricsMiddleware () {
  const httpRequestsMetric = new Prometheus.Counter({
    name: 'http_requests_count',
    help: 'Total HTTP request count grouped by status code.',
    labelNames: ['status_code']
  })

  return (req: Request, res: Response, next: NextFunction) => {
    onFinished(res, () => {
      const statusCode = `${Math.floor(res.statusCode / 100)}XX`
      httpRequestsMetric.labels(statusCode).inc()
    })
    next()
  }
}

exports.observeFileUploadMetricsMiddleware = function observeFileUploadMetricsMiddleware () {
  return ({ file }: Request, res: Response, next: NextFunction) => {
    onFinished(res, () => {
      if (file != null) {
        res.statusCode < 400 ? fileUploadsCountMetric.labels(file.mimetype).inc() : fileUploadErrorsMetric.labels(file.mimetype).inc()
      }
    })
    next()
  }
}
exports.serveMetrics = function serveMetrics() {
  return async (req: Request, res: Response, next: NextFunction) => {
    const userAgentExists = req.headers['user-agent'] !== undefined
    challengeUtils.solveIf(challenges.exposedMetricsChallenge, () => {
      const userAgent = userAgentExists ? req.headers['user-agent'] : ''
      return !userAgent.includes('Prometheus')