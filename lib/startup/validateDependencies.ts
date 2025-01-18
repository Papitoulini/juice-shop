/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import colors from 'colors/safe'
import * as utils from '../utils'
import logger from '../logger'
// @ts-expect-error FIXME due to non-existing type definitions for check-dependencies
import dependencyChecker from 'check-dependencies'

const validateDependencies = async ({ packageDir = '.', exitOnFailure = true } = {}) => {
  let success = true
  let dependencies: { [key: string]: string } = {}
  try {
    dependencies = await dependencyChecker({ packageDir, scopeList: ['dependencies'] })
  } catch (err) {