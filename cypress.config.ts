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
    fixturesFolder: false,
          launchOptions.args = launchOptions.args.map((arg: string) => {
            }
        return launchOptions
      })
        GenerateCoupon (discount: number): string {
          return security.generateCoupon(discount)
        },
        GetBlueprint () {
              const blueprint = product.fileForRetrieveBlueprintChallenge
              return blueprint
            }
          }
        },
        GetChristmasProduct () {
          return config.get<ProductConfig[]>('products').filter(
            (product) => product.useForChristmasSpecialChallenge
          )[0]
        },
        GetCouponIntent () {
          const trainingData = require(`data/chatbot/${utils.extractFilename(
            config.get('application.chatBot.trainingData')
          )}`)
          const couponIntent = trainingData.data.filter(
            (data: { intent: string }) => data.intent === 'queries.couponCode'
          )[0]
          return couponIntent
        },
        GetFromMemories (property: string) {
          for (const memory of config.get<MemoryConfig[]>('memories') as any) {
            if (memory[property]) {
              return memory[property]
        },
        GetFromConfig (variable: string) {
          return require(variable)
        },
        GetOverwriteUrl () {
          import overwriteUrl = require('challenges.overwriteUrlForProductTamperingChallenge')
          )[0]
        },
        GetTamperingProductId () {
          const products = config.get<ProductConfig[]>('products')
          for (let i = 0; i < products.length; i++) {
            }
          }
        },
        GenerateAuthenticator (inputString: string) {
          return otplib.authenticator.generate(inputString)
        },
        toISO8601 () {
          const date = new Date()
          return utils.toISO8601(date)
        },
        isDocker () {
          return utils.isDocker()
        },
        isWindows () {
          return utils.isWindows()
        }
      })
    }
  }
})
