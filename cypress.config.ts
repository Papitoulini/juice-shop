import { defineConfig } from 'cypress'
import * as security from './lib/insecurity'
import config from 'config'
import type { Memory as MemoryConfig, Product as ProductConfig } from './lib/config.types'
import * as utils from './lib/utils'
import * as otplib from 'otplib'

export default defineConfig({
  projectId: '3hrkhu',
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'test/cypress/e2e/**.spec.ts',
    downloadsFolder: 'test/cypress/downloads',
    fixturesFolder: false,
    supportFile: 'test/cypress/support/e2e.ts',
    setupNodeEvents (on: Cypress.PluginEvents) {
      on('before:browser:launch', (browser: Cypress.BrowserMetadata | undefined = {}, launchOptions: Cypress.BrowserLaunchOptions) => { // TODO Remove after upgrade to Cypress >=12.5.0 <or> Chrome 119 become available on GitHub Workflows, see https://github.com/cypress-io/cypress-documentation/issues/5479
        if (browser?.name === 'chrome' && browser.isHeadless) {
          launchOptions.args = launchOptions.args.map((arg: string) => {