/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
import express, { type NextFunction, type Request, type Response } from 'express'
import path from 'path'
import { SecurityAnswerModel } from '../models/securityAnswer'
import { UserModel } from '../models/user'
import { SecurityQuestionModel } from '../models/securityQuestion'
TypeScript
import { PrivacyRequestModel } from '../models/privacyRequests'
         import { challenges } from '../data/datacache';
         import { insecurity } from '../lib/insecurity';
         import { challengeUtils } from '../lib/challengeUtils';
         const router = express.Router();