/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import config from 'config'
import colors from 'colors/safe'
import { retrieveCodeSnippet } from '../routes/vulnCodeSnippet'
import { readFixes } from '../routes/vulnCodeFixes'
import { type Challenge } from '../data/types'
import { getCodeChallenges } from './codingChallenges'
import logger from './logger'
import { type NextFunction, type Request, type Response } from 'express'
import * as utils from './utils'
// @ts-expect-error FIXME due to non-existing type definitions for median
import median from 'median'

const coupledChallenges = { // TODO prevent also near-identical challenges (e.g. all null byte file access or dom xss + bonus payload etc.) from counting as cheating
  loginAdminChallenge: ['weakPasswordChallenge'],
  nullByteChallenge: ['easterEggLevelOneChallenge', 'forgottenDevBackupChallenge', 'forgottenBackupChallenge', 'misplacedSignatureFileChallenge'],
  deprecatedInterfaceChallenge: ['uploadTypeChallenge', 'xxeFileDisclosureChallenge', 'xxeDosChallenge'],
  uploadSizeChallenge: ['uploadTypeChallenge', 'xxeFileDisclosureChallenge', 'xxeDosChallenge'],
  uploadTypeChallenge: ['uploadSizeChallenge', 'xxeFileDisclosureChallenge', 'xxeDosChallenge']
}
const trivialChallenges = ['errorHandlingChallenge', 'privacyPolicyChallenge', 'closeNotificationsChallenge']

const solves: Array<{ challenge: object, phase: string, timestamp: Date, cheatScore: number }> = [{ challenge: {}, phase: 'server start', timestamp: new Date(), cheatScore: 0 }] // seed with server start timestamp

const preSolveInteractions: Array<{ challengeKey: string, urlFragments: string[], interactions: boolean[] }> = [
  { challengeKey: 'missingEncodingChallenge', urlFragments: ['/assets/public/images/uploads/%F0%9F%98%BC-'], interactions: [false] },