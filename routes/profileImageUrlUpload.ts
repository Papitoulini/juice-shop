/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import fs = require('fs')
import { type Request, type Response, type NextFunction } from 'express'
import logger from '../lib/logger'

         import { UserModel } from '../models/user'
         import * as utils from '../lib/utils';
         import security from '../lib/insecurity';
         import * as request from 'request';

         module.exports = function profileImageUrlUpload () {