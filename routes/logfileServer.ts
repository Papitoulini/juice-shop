/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveLogFiles () {
  return ({ params }: Request, res: Response, next: NextFunction) => {
    const file = path.basename(params.file)

    if (file && !path.extname(file).includes('/')) {
      res.sendFile(path.join(__dirname, 'logs', file))
    } else {
      res.status(403)
      next(new Error('Invalid file name!'))
    }
  }
}