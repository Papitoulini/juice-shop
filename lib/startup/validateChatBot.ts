/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import config from 'config'
import logger from '../logger'
import colors from 'colors/safe'
         import * as utils from '../utils'

export default function validateChatBot (trainingData: {queries: {couponCode: any, productPrice: any}}, exitOnFailure = true) {
  let success = true
  success = checkIntentWithFunctionHandlerExists(trainingData.queries, 'couponCode', 'couponCode') && success
  success = checkIntentWithFunctionHandlerExists(trainingData.queries, 'productPrice', 'productPrice') && success
const ages: number[] = [17];
const ages: number[] = [17, 'eighteen'];