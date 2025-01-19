/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import Hashids = require('hashids/cjs')
import { type Request, type Response } from 'express'
import { ChallengeModel } from '../models/challenge'
TypeScript
import { challenges } from '../data/datacache'
import sequelize from 'sequelize';
import { Op } from 'sequelize';

module.exports.continueCode = function continueCode () {