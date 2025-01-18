/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { BasketItemModel } from '../models/basketitem'
import { QuantityModel } from '../models/quantity'
import challengeUtils = require('../lib/challengeUtils')

import * as utils from '../lib/utils'
import { challenges } from '../data/datacache'
import security = require('../lib/insecurity')

interface RequestWithRawBody extends Request {
  rawBody: string