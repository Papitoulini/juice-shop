/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveKeyFiles () {
  return ({ params }: Request, res: Response, next: NextFunction) => {
    const file = params.file

    // Validate and sanitize the file name to prevent path traversal
    if (!file || file.includes('/') || file.includes('..')) {
      res.status(403)
      next(new Error('Invalid file name!'))
      return
    }

    // Resolve the file path and ensure it is within the intended directory
    const resolvedPath = path.resolve('encryptionkeys/', file)
    const intendedDir = path.resolve('encryptionkeys/')
    if (!resolvedPath.startsWith(intendedDir)) {
      res.status(403)
      next(new Error('Access denied!'))
      return
    }

    res.sendFile(resolvedPath)
  }
}
