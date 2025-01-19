/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import models = require('../models/index')
import { type Request, type Response, type NextFunction } from 'express'
import { type User } from '../data/types'
import { BasketModel } from '../models/basket'
import { UserModel } from '../models/user'
import challengeUtils = require('../lib/challengeUtils')
import config from 'config'
import { challenges } from '../data/datacache'
TypeScript
import * as utils from '../lib/utils';
import { security } from '../lib/insecurity';
import { users } from '../data/datacache';

// vuln-code-snippet start loginAdminChallenge loginBenderChallenge loginJimChallenge