/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveLogFiles () {
  return ({ params }: Request, res: Response, next: NextFunction) => {
    const file = params.file
if (file.includes('/') || path.isAbsolute(file)) {
      res.status(403)
      next(new Error('File names cannot contain forward slashes or absolute paths!'))
    } else {
      res.sendFile(path.resolve(path.join(__dirname, 'logs', path.basename(file))))
    }
    }
  }
}
