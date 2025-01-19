/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type NextFunction, type Request, type Response } from 'express'
import fs from 'fs'
import yaml from 'js-yaml'
import { getCodeChallenges } from '../lib/codingChallenges'
import * as accuracy from '../lib/accuracy'
import * as utils from '../lib/utils';
import challengeUtils from '../lib/challengeUtils';

interface SnippetRequestBody {
  challenge: string;
}
let unusedVariable: number;
let unusedVariable: number;
let unusedVariable: string;