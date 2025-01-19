/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import fs = require('fs')
import { type Request, type Response } from 'express'
import challengeUtils = require('../lib/challengeUtils')
import config from 'config'
import * as utils from '../lib/utils'
import { AllHtmlEntities as Entities } from 'html-entities'
import { challenges } from '../data/datacache';
         import pug from 'pug';
import { themes } from '../views/themes/themes';
import { Entities } from './entities';

const entities = new Entities();