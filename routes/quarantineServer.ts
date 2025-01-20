/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path = require('path')
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveQuarantineFiles () {
  return ({ params, query }: Request, res: Response, next: NextFunction) => {
    const file = params.file
if (!path.normalize(file).startsWith(path.posix.join('ftp', 'quarantine'))) {
      res.status(403)
      next(new Error('File names cannot contain forward slashes!'))
    } else {
      res.sendFile(path.join(__dirname, 'ftp/quarantine/', path.posix.normalize(file)))
    }
    }
  }
}
