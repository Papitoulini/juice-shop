/*
 * Copyright (c) 2014-2021 Bjoern Kimminich.
 * SPDX-License-Identifier: MIT
 */

import logger from './logger'
import colors from 'colors/safe'
const solves: Record<string, { 'find it': boolean, 'fix it': boolean, attempts: { 'find it': number, 'fix it': number } }> = {}

type Phase = 'find it' | 'fix it'

export const storeFindItVerdict = (challengeKey: string, verdict: boolean) => {
  storeVerdict(challengeKey, 'find it', verdict)
}

export const storeFixItVerdict = (challengeKey: string, verdict: boolean) => {
  storeVerdict(challengeKey, 'fix it', verdict)
}

export const calculateFindItAccuracy = (challengeKey: string) => {
  return calculateAccuracy(challengeKey, 'find it')
}

export const calculateFixItAccuracy = (challengeKey: string) => {
  return calculateAccuracy(challengeKey, 'fix it')
}

export const totalFindItAccuracy = () => {
  return totalAccuracy('find it')
}

export const totalFixItAccuracy = () => {
  return totalAccuracy('fix it')
}

export const getFindItAttempts = (challengeKey: string) => {
  return solves[challengeKey] ? solves[challengeKey].attempts['find it'] : 0
}

function totalAccuracy (phase: Phase) {
  let sumAccuracy = 0
  let totalSolved = 0
  Object.entries(solves).forEach(([key, value]) => {
    if (value[phase]) {
      sumAccuracy += value[phase] ? 1 / value.attempts[phase] : 0
      totalSolved += value[phase] ? 1 : 0