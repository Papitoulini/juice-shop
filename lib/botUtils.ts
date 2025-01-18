/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
import { ProductModel } from '../models/product'
import { type Product } from '../data/types'
import fuzz from 'fuzzball'
import { challenges } from '../data/datacache'
import * as security from './insecurity'
import * as challengeUtils from './challengeUtils'

export async function productPrice (query: string, user: string) {
  const products = await ProductModel.findAll()
  const queriedProducts = products
    .filter((product: Product) => fuzz.partial_ratio(query, product.name) > 60)