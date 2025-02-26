/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveQuarantineFiles () {
  return ({ params, query }: Request, res: Response, next: NextFunction) => {
    const file = params.file

    // Validate and sanitize the file path
    const sanitizedPath = path.normalize(path.join(process.env.QUARANTINE_DIR || 'ftp/quarantine/', file))
    const quarantineDir = path.resolve(process.env.QUARANTINE_DIR || 'ftp/quarantine/')

    if (!file.includes('/') && sanitizedPath.startsWith(quarantineDir)) {
      res.sendFile(sanitizedPath)
    } else {
      res.status(403)
      next(new Error('Invalid file path!'))
    }
  }
}