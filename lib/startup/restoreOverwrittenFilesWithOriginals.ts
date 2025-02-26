/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import path from 'path'
import * as utils from '../utils'
import logger from '../logger'
import { copyFile, access } from 'fs/promises'
import { glob } from 'glob'

const exists = async (path: string) => await access(path).then(() => true).catch(() => false)

const restoreOverwrittenFilesWithOriginals = async () => {
  const resolvedPaths = {
    legalMdPath: path.resolve('data/static/legal.md'),
    ftpLegalMdPath: path.resolve('ftp/legal.md'),
    owaspPromoVttPath: path.resolve('data/static/owasp_promo.vtt'),
    frontendDistPath: path.resolve('frontend/dist/frontend/assets/public/videos/owasp_promo.vtt')
  }

  await copyFile(resolvedPaths.legalMdPath, resolvedPaths.ftpLegalMdPath)

  if (await exists(resolvedPaths.frontendDistPath)) {
    await copyFile(resolvedPaths.owaspPromoVttPath, resolvedPaths.frontendDistPath)
  }

  try {
    const files = await glob(path.resolve('data/static/i18n/*.json'))
    await Promise.all(
      files.map(async (filename: string) => {
        const resolvedFilename = path.resolve('i18n/', path.basename(filename))
        await copyFile(filename, resolvedFilename)
      })
    )
  } catch (err) {
    logger.warn('Error listing JSON files in /data/static/i18n folder: ' + utils.getErrorMessage(err))
  }
}

export default restoreOverwrittenFilesWithOriginals