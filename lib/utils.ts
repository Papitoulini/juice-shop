/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

/* jslint node: true */
import packageJson from '../package.json'
import fs from 'fs'
import logger from './logger'
import config from 'config'
import jsSHA from 'jssha'
import download from 'download'
import crypto from 'crypto'
import clarinet from 'clarinet'
import type { Challenge } from 'data/types'

import isHeroku from './is-heroku'
import isDocker from './is-docker'
import isWindows from './is-windows'
export { default as isDocker } from './is-docker'
export { default as isWindows } from './is-windows'
// import isGitpod from 'is-gitpod') // FIXME Roll back to this when https://github.com/dword-design/is-gitpod/issues/94 is resolve
const isGitpod = () => false

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

export const queryResultToJson = <T>(
  data: T,
  status: string = 'success'
): { data: T, status: string } => {
  return {
    status,
    data
  }
}

export const isUrl = (url: string) => {
  return startsWith(url, 'http')
}

export const startsWith = (str: string, prefix: string) => str ? str.indexOf(prefix) === 0 : false

export const endsWith = (str?: string, suffix?: string) => (str && suffix) ? str.includes(suffix, str.length - suffix.length) : false

export const contains = (str: string, element: string) => str ? str.includes(element) : false // TODO Inline all usages as this function is not adding any functionality to String.includes

export const containsEscaped = function (str: string, element: string) {
  return contains(str, element.replace(/"/g, '\\"'))
}

export const containsOrEscaped = function (str: string, element: string) {
  return contains(str, element) || containsEscaped(str, element)
}

export const unquote = function (str: string) {
  if (str && startsWith(str, '"') && endsWith(str, '"')) {
    return str.substring(1, str.length - 1)
  } else {
    return str
  }
}

export const trunc = function (str: string, length: number) {
  str = str.replace(/(\r\n|\n|\r)/gm, '')
  return (str.length > length) ? str.substr(0, length - 1) + '...' : str
}

export const version = (module?: string) => {
  if (module) {
    // @ts-expect-error FIXME Ignoring any type issue on purpose
    return packageJson.dependencies[module]
  } else {
    return packageJson.version
  }
}

let cachedCtfKey: string | undefined
const getCtfKey = () => {
  if (!cachedCtfKey) {
    if (process.env.CTF_KEY !== undefined && process.env.CTF_KEY !== '') {
      cachedCtfKey = process.env.CTF_KEY
    } else {
      const data = fs.readFileSync('ctf.key', 'utf8')
      cachedCtfKey = data
    }
  }
  return cachedCtfKey
}
export const ctfFlag = (text: string) => {
  const shaObj = new jsSHA('SHA-1', 'TEXT') // eslint-disable-line new-cap
  shaObj.setHMACKey(getCtfKey(), 'TEXT')
  shaObj.update(text)
  return shaObj.getHMAC('HEX')
}

export const toMMMYY = (date: Date) => {
  const month = date.getMonth()
  const year = date.getFullYear()
  return months[month] + year.toString().substring(2, 4)
}

export const toISO8601 = (date: Date) => {
  let day = '' + date.getDate()
  let month = '' + (date.getMonth() + 1)
  const year = date.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

export const extractFilename = (url: string) => {
  let file = decodeURIComponent(url.substring(url.lastIndexOf('/') + 1))
  if (contains(file, '?')) {
    file = file.substring(0, file.indexOf('?'))
  }
  return file
}

export const downloadToFile = async (url: string, dest: string) => {
  try {
    const data = await download(url)
    fs.writeFileSync(dest, data)
  } catch (err) {
    logger.warn('Failed to download ' + url + ' (' + getErrorMessage(err) + ')')
  }
}

export const jwtFrom = ({ headers }: { headers: { [key: string]: string } }) => {
  if (headers?.authorization) {
    const parts = headers.authorization.split(' ')
    if (parts.length === 2) {