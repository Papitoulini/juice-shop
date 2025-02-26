/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveLogFiles () {
  return ({ params }: Request, res: Response, next: NextFunction) => {
    const file = path.basename(params.file) // Sanitize user input by removing any directory traversal attempts

    const logDir = process.env.LOG_DIR || 'logs' // Use environment variable for log directory, or fallback to 'logs'
    const filePath = path.join(logDir, file) // Join the sanitized file name with the log directory

    // Ensure the file path is within the log directory
    if (path.resolve(filePath).startsWith(path.resolve(logDir))) {
      res.sendFile(filePath)
    } else {
      res.status(403)
      next(new Error('Access denied!'))
    }
  }
}