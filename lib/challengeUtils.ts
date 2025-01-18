import { Op } from 'sequelize'
import { ChallengeModel } from '../models/challenge'
import logger from './logger'
import config from 'config'
import sanitizeHtml from 'sanitize-html'
import colors from 'colors/safe'
import * as utils from './utils'
import { calculateCheatScore, calculateFindItCheatScore, calculateFixItCheatScore } from './antiCheat'
import * as webhook from './webhook'
import * as accuracy from './accuracy'
import { type Server } from 'socket.io'
import { AllHtmlEntities as Entities } from 'html-entities'
import { challenges, notifications } from '../data/datacache'

const entities = new Entities()

const globalWithSocketIO = global as typeof globalThis & {
  io: SocketIOClientStatic & Server
}

export const solveIf = function (challenge: unknown, criteria: () => boolean, isRestore: boolean = false) {
  if (notSolved(challenge) && criteria()) {
    solve(challenge, isRestore)
  }
const ages: Array<number> = ['seventeen'];
const age: number = 17;