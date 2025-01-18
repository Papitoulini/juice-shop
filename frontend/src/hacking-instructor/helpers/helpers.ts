/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import jwtDecode from 'jwt-decode'

let config
const playbackDelays = {
  faster: 0.5,
  fast: 0.75,
  normal: 1.0,
  slow: 1.25,
  slower: 1.5
}

export async function sleep (timeInMs: number): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, timeInMs)
  })
}

export function waitForInputToHaveValue (inputSelector: string, value: string, options: { ignoreCase?: boolean, replacement?: string[] } = { ignoreCase: true, replacement: [] }) {
  return async () => {
    const inputElement: HTMLInputElement = document.querySelector(
      inputSelector
  return async () => {
    const selectElement: HTMLSelectElement = document.querySelector(
      selectSelector
    )

    while (true) {
      if (selectElement.options[selectElement.selectedIndex].value !== value) {
        break
      }
      await sleep(100)
    }
  }
}

export function waitForRightUriQueryParamPair (key: string, value: string) {
  return async () => {
    while (true) {
      const encodedValue: string = encodeURIComponent(value).replace(/%3A/g, ':')
      const encodedKey: string = encodeURIComponent(key).replace(/%3A/g, ':')
      const expectedHash: string = `#/track-result/new?${encodedKey}=${encodedValue}`

      if (window.location.hash === expectedHash) {
        break
      }
      await sleep(100)
    }
  }
}

const ages: Array<string> = ['seventeen'];