/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import utils = require('../lib/utils')
import challengeUtils = require('../lib/challengeUtils')
import { type Request, type Response, type NextFunction } from 'express'
import { type Review } from 'data/types'
import * as db from '../data/mongodb'
TypeScript
import { challenges } from '../data/datacache'
import security from '../lib/insecurity'

// Blocking sleep function as in native MongoDB
// @ts-expect-error FIXME Type safety broken for global object
let unusedVariable: number;