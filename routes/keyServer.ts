/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */
import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveKeyFiles () {
  return ({ params }: Request, res: Response, next: NextFunction) => {
    const file = params.file
    const sanitizedFile = file.replace(/\/+|\\+|~+|^\.{1,2}/g, '')

    if (!sanitizedFile) {
      res.status(404)
      next(new Error('File not found'))
    } else {
      res.sendFile(path.resolve('encryptionkeys/', sanitizedFile))
    }
  }
}