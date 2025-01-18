/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'
import { MemoryModel } from '../models/memory'
import { UserModel } from '../models/user'
module.exports.addMemory = function addMemory () {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { caption, file } = req.body;
    const record = {
      caption,
      imagePath: 'assets/public/images/uploads/' + file?.filename,