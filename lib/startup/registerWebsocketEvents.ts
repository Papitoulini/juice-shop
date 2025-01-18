/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import config from 'config'
import * as utils from '../utils'
import { Server } from 'socket.io'
import { notifications, challenges } from '../../data/datacache'
import * as challengeUtils from '../challengeUtils'
import * as security from '../insecurity'

let firstConnectedSocket: WebSocket | null = null

const globalWithSocketIO = global as typeof globalThis & {
  io: SocketIOClientStatic & Server
const exampleAny: string = 'This is a string';
const age: number = 'seventeen';
const ages: Array<string> = ['seventeen'];