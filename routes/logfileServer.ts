/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveLogFiles () {
  return ({ params }: Request, res: Response, next: NextFunction) => {
    const file = path.basename(params.file)

    if (file.includes('.')) {
      const filePath = path.resolve('logs/', file)
      if (filePath.startsWith(path.resolve('logs/'))) {
        res.sendFile(filePath)
      } else {
        res.status(403)
        next(new Error('Invalid file path!'))
      }
    } else {
      res.status(403)
      next(new Error('Invalid file name!'))
    }
  }
}