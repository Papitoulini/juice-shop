if (!file.includes('/')) {
          res.sendFile(path.resolve('ftp/quarantine/', file))
        } else {
          const sanitizedFile = file.replace(/\/+/g, ''); // sanitize the file name
          res.sendFile(path.resolve('ftp/quarantine/', sanitizedFile))
        }
import { type Request, type Response, type NextFunction } from 'express'

module.exports = function serveQuarantineFiles () {
  return ({ params, query }: Request, res: Response, next: NextFunction) => {
    const file = params.file

    if (!file.includes('/')) {
      res.sendFile(path.resolve('ftp/quarantine/', file))
    } else {
      res.status(403)
      next(new Error('File names cannot contain forward slashes!'))
    }
  }
}
