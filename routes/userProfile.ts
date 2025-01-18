/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import fs = require('fs')
import { type Request, type Response, type NextFunction } from 'express'
import { challenges } from '../data/datacache'

import { UserModel } from '../models/user'
import challengeUtils = require('../lib/challengeUtils')
import config from 'config'
import * as utils from '../lib/utils'
import { AllHtmlEntities as Entities } from 'html-entities'
import security = require('../lib/insecurity')
import pug = require('pug')
import themes = require('../views/themes/themes').themes
const entities = new Entities()