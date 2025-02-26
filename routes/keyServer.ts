/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveKeyFiles () {
  return ({ params }: Request, res: Response, next: NextFunction) => {
    const file = path.basename(params.file) // Sanitize file path

    const filePath = path.join(process.env.ENCRYPTION_KEYS_DIR || 'encryptionkeys', file)
    const allowedDir = path.resolve(process.env.ENCRYPTION_KEYS_DIR || 'encryptionkeys')

    if (path.resolve(filePath).startsWith(allowedDir)) { // Ensure file is within allowed directory
      res.sendFile(filePath)
    } else {
      res.status(403)
      next(new Error('Access denied!'))
    }
  }
}