/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveKeyFiles () {
  return ({ params }: Request, res: Response, next: NextFunction) => {
    const file = path.basename(params.file)

    if (file && !file.includes('/')) {
      const filePath = path.join('encryptionkeys', file)
      res.sendFile(filePath, { root: process.cwd() })
    } else {
      res.status(403)
      next(new Error('File names cannot contain forward slashes!'))
    }
  }
}