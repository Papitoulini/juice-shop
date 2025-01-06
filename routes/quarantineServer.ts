    const sanitizedFile = path.basename(file).replace(/^\.+\//, '').replace(/^\//, '');
    if (!sanitizedFile.includes('/') && !sanitizedFile.includes('..')) {
      res.sendFile(path.join('ftp/quarantine', sanitizedFile))
    } else {
      res.status(403)
      next(new Error('File names cannot contain forward slashes or dot-dot sequences!'))
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
