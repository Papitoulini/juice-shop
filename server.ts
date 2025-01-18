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

const startTime = Date.now()
import finale = require('finale-rest')
import express = require('express')
import compression = require('compression')
import helmet = require('helmet')
import featurePolicy = require('feature-policy')
var foo = require('foo');
require('foo');
import foo from 'foo';
import express = require('express');
var foo = require('foo');
var foo = require('foo');
const foo = require('foo');
var foo = require('foo');
import foo = require('foo');
var foo = require('foo');
const foo = require('foo');
var foo = require('foo');
var foo = require('foo');
const foo = require('foo');
var foo = require('foo');
var foo = require('foo');
import foo from 'foo';
const foo = require('foo');
const foo = require('foo');
// ADD YOUR FIXED CODE HERE
import foo = require('foo');
import foo from 'foo';
import foo from 'foo';
const foo = require('foo');
var foo = require('foo');
const SomeModule = require('some-module');
import foo from 'foo';
var foo = require('foo');
const foo = require('foo');
var foo = require('foo');
const foo = require('foo');
const foo = require('foo');
import foo from 'foo';
import foo = require('foo');
var foo = require('foo');
const foo = require('foo'); // This line violates the no-var-requires rule
const apiConfig = require('config');
// Original code snippet
const foo = require('foo');
let foo = require('foo');
var foo = require('foo');
var fs = require("fs");
import foo = require('foo');
require('./foo');
var foo = require('foo');
var foo = require('foo');
const myModule = require('my-module');
var foo = require('foo');
var foo = require('foo');
var foo = require('foo');
var foo = require('foo');
const foo = require('foo');
const foo = require('foo');
var foo = require('foo');
import foo from 'foo';
import foo = require('foo');
const axios = require('axios');
var foo = require('foo');
const foo = require('foo');
import foo = require('foo');
var foo = require('foo');