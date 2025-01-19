/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import os from 'os'
import { promisify } from 'util'
import request from 'request'
import logger from './logger'
import config from 'config'
import colors from 'colors/safe'
import type { CoreOptions, RequestCallback, Request } from 'request'
import * as utils from './utils'
import { totalCheatScore } from './antiCheat'
// force type of post as promisify doesn't know which one it should take
         const post = promisify(request.post as ((uri: string, options?: CoreOptions, callback?: RequestCallback) => Request))

export const notify = async (challenge: { key: string, name: string }, cheatScore = -1, webhook = process.env.SOLUTIONS_WEBHOOK) => {
  if (!webhook) {
    return
  }