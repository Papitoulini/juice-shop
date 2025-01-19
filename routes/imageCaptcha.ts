/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { ImageCaptchaModel } from '../models/imageCaptcha'
import { Op } from 'sequelize'
TypeScript
const svgCaptcha = import('svg-captcha');
const security = import('../lib/insecurity');

function imageCaptchas () {
  return (req: Request, res: Response) => {