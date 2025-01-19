/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
import dataErasure from './routes/dataErasure'
import fs = require('fs')
import { type Request, type Response, type NextFunction } from 'express'
import { sequelize } from './models'
import { UserModel } from './models/user'
import { QuantityModel } from './models/quantity'
import { CardModel } from './models/card'
import { PrivacyRequestModel } from './models/privacyRequests'
import { AddressModel } from './models/address'
import { SecurityAnswerModel } from './models/securityAnswer'
import { SecurityQuestionModel } from './models/securityQuestion'
import { RecycleModel } from './models/recycle'
import { ComplaintModel } from './models/complaint'
import { ChallengeModel } from './models/challenge'
import { BasketItemModel } from './models/basketitem'
import { FeedbackModel } from './models/feedback'
import { ProductModel } from './models/product'
import { WalletModel } from './models/wallet'
import logger from './lib/logger'
import config from 'config'
import path from 'path'
import morgan from 'morgan'
import colors from 'colors/safe'
import * as utils from './lib/utils'
import * as Prometheus from 'prom-client'
import datacreator from './data/datacreator'

import validatePreconditions from './lib/startup/validatePreconditions'
import cleanupFtpFolder from './lib/startup/cleanupFtpFolder'
import validateConfig from './lib/startup/validateConfig'
import restoreOverwrittenFilesWithOriginals from './lib/startup/restoreOverwrittenFilesWithOriginals'
import registerWebsocketEvents from './lib/startup/registerWebsocketEvents'
import customizeApplication from './lib/startup/customizeApplication'
import customizeEasterEgg from './lib/startup/customizeEasterEgg' // vuln-code-snippet hide-line

import authenticatedUsers from './routes/authenticatedUsers'
TypeScript
const startTime = Date.now()
import { finale } from 'finale-rest';
import express from 'express';
import compression = require('compression');
import helmet = require('helmet');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import { foo } from 'foo';
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import { foo } from 'foo';
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import { foo } = require('foo');
import foo = require('foo');
import foo = require('foo');
import { foo } from 'foo';
import foo = require('foo');
import foo = require('foo');
import { foo } = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import { foo } from 'foo';
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import { foo } = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import { foo } from 'foo';
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import { foo } from 'foo';
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');
import foo = require('foo');