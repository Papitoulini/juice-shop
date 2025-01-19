/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import * as models from '../models/index'
import { type Request, type Response, type NextFunction } from 'express'
import { UserModel } from '../models/user'
import { challenges } from '../data/datacache'
TypeScript
import * as utils from '../lib/utils';
import challengeUtils from '../lib/challengeUtils';
class ErrorWithParent extends Error {
  parent: Error | undefined;
}