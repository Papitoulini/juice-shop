/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { ProductModel } from '../models/product'
import { BasketModel } from '../models/basket'
import challengeUtils = require('../lib/challengeUtils')

         import * as utils from '../lib/utils';
         import { challenges } from '../data/datacache';
         import security from '../lib/insecurity';

         module.exports = function retrieveBasket () {
           return (req: Request, res: Response, next: NextFunction) => {