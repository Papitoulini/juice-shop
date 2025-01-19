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

let firstConnectedSocket: SocketIOClientStatic | null = null

const globalWithSocketIO = global as typeof globalThis & {
  io: SocketIOClientStatic & Server
const ages: number[] = [17, 18, 19];
const ages: number[] = [17];
const ages: number[] = ['seventeen'];
const ages: number[] = [17];
const ages: number[] = [17, 'seventeen'];