/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveLogFiles () {
  return ({ params }: Request, res: Response, next: NextFunction) => {
    const file = params.file
    const logsDirectory = path.resolve('logs/')
    const resolvedPath = path.resolve(logsDirectory, file)

    // Validate that the resolved path is within the intended directory
    if (!resolvedPath.startsWith(logsDirectory)) {
      res.status(403)
      next(new Error('Invalid file path!'))
      return
    }

    if (!file.includes('/')) {
      res.sendFile(resolvedPath)
    } else {
      res.status(403)
      next(new Error('File names cannot contain forward slashes!'))
    }
  }
}
