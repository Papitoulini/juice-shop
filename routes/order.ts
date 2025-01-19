/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'
import { BasketModel } from '../models/basket'
import { ProductModel } from '../models/product'
import { BasketItemModel } from '../models/basketitem'
import { QuantityModel } from '../models/quantity'
import { DeliveryModel } from '../models/delivery'
import { WalletModel } from '../models/wallet'
import challengeUtils = require('../lib/challengeUtils')
import config from 'config'
import * as utils from '../lib/utils'
import * as db from '../data/mongodb'
import { challenges, products } from '../data/datacache'
TypeScript
TypeScript
const fs = require('fs')
import PDFDocument from 'pdfkit'
import { security } from '../lib/insecurity'
interface Product {