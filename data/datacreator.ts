/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

/* jslint node: true */
import { AddressModel } from '../models/address'
import { BasketModel } from '../models/basket'
import { BasketItemModel } from '../models/basketitem'
import { CardModel } from '../models/card'
import { ChallengeModel } from '../models/challenge'
import { ComplaintModel } from '../models/complaint'
import { DeliveryModel } from '../models/delivery'
import { FeedbackModel } from '../models/feedback'
import { MemoryModel } from '../models/memory'
import { ProductModel } from '../models/product'
import { QuantityModel } from '../models/quantity'
import { RecycleModel } from '../models/recycle'
import { SecurityAnswerModel } from '../models/securityAnswer'
import { SecurityQuestionModel } from '../models/securityQuestion'
import { UserModel } from '../models/user'
import { WalletModel } from '../models/wallet'
import { type Product } from './types'
import logger from '../lib/logger'
import type { Memory as MemoryConfig, Product as ProductConfig } from '../lib/config.types'
import config from 'config'
import * as utils from '../lib/utils'
import type { StaticUser, StaticUserAddress, StaticUserCard } from './staticData'
import { loadStaticChallengeData, loadStaticDeliveryData, loadStaticUserData, loadStaticSecurityQuestionsData } from './staticData'
import { ordersCollection, reviewsCollection } from './mongodb'
import { AllHtmlEntities as Entities } from 'html-entities'
import * as datacache from './datacache'
import * as security from '../lib/insecurity'

import replace = require('replace')
const entities = new Entities()

export default async () => {
            if (useForChristmasSpecialChallenge) { datacache.products.christmasSpecial = persistedProduct }
            if (urlForProductTamperingChallenge) {
              datacache.products.osaft = persistedProduct
              await datacache.challenges.changeProductChallenge.update({
                description: customizeChangeProductChallenge(
                  datacache.challenges.changeProductChallenge.description,
                  config.get('challenges.overwriteUrlForProductTamperingChallenge'),
                  persistedProduct)
              })
            }
            if (fileForRetrieveBlueprintChallenge && datacache.challenges.retrieveBlueprintChallenge.hint !== null) {
              await datacache.challenges.retrieveBlueprintChallenge.update({
                hint: customizeRetrieveBlueprintChallenge(
                  datacache.challenges.retrieveBlueprintChallenge.hint,
                  persistedProduct)
              })
            }
            if (deletedDate) void deleteProduct(persistedProduct.id) // TODO Rename into "isDeleted" or "deletedFlag" in config for v14.x release
          } else {
            throw new Error('No persisted product found!')
          }
          return persistedProduct
        })
          .then(async ({ id }: { id: number }) =>
            await Promise.all(
              reviews.map(({ text, author }) =>
                reviewsCollection.insert({
                  message: text,
                  author: datacache.users[author].email,
                  product: id,
                  likesCount: 0,
                  likedBy: []
                }).catch((err: unknown) => {
                  logger.error(`Could not insert Product Review ${text}: ${utils.getErrorMessage(err)}`)
                })
              )
            )
          )
    )
  )

  function customizeChangeProductChallenge (description: string, customUrl: string, customProduct: Product) {
    let customDescription = description.replace(/OWASP SSL Advanced Forensic Tool \(O-Saft\)/g, customProduct.name)
    customDescription = customDescription.replace('https://owasp.slack.com', customUrl)
    return customDescription
  }

  function customizeRetrieveBlueprintChallenge (hint: string, customProduct: Product) {
    return hint.replace(/OWASP Juice Shop Logo \(3D-printed\)/g, customProduct.name)
  }
}

async function createBaskets () {
  const baskets = [
    { UserId: 1 },
    { UserId: 2 },
    { UserId: 3 },
    { UserId: 11 },
    { UserId: 16 }
  ]

  return await Promise.all(
    baskets.map(async basket => {
      return await BasketModel.create({
        UserId: basket.UserId
      }).catch((err: unknown) => {
        logger.error(`Could not insert Basket for UserId ${basket.UserId}: ${utils.getErrorMessage(err)}`)
      })
    })
  )
}

async function createBasketItems () {
  const basketItems = [
    {
      BasketId: 1,
      ProductId: 1,
      quantity: 2
    },
    {
      BasketId: 1,
      ProductId: 2,
      quantity: 3
    },
    {
      BasketId: 1,
      ProductId: 3,
      quantity: 1
    },
    {
      BasketId: 2,
      ProductId: 4,
      quantity: 2
    },
    {
      BasketId: 3,
      ProductId: 4,
      quantity: 1
    },
    {
      BasketId: 4,
      ProductId: 4,
      quantity: 2
    },
    {
      BasketId: 5,
      ProductId: 3,
      quantity: 5
    },
    {
      BasketId: 5,
      ProductId: 4,
      quantity: 2
    }
  ]

  return await Promise.all(
    basketItems.map(async basketItem => {
      return await BasketItemModel.create(basketItem).catch((err: unknown) => {
        logger.error(`Could not insert BasketItem for BasketId ${basketItem.BasketId}: ${utils.getErrorMessage(err)}`)
      })
    })
  )
}

async function createAnonymousFeedback () {
  const feedbacks = [
    {
      comment: 'Incompetent customer support! Can\'t even upload photo of broken purchase!<br><em>Support Team: Sorry, only order confirmation PDFs can be attached to complaints!</em>',
      rating: 2
    },
    {
      comment: 'This is <b>the</b> store for awesome stuff of all kinds!',
      rating: 4
    },
    {
      comment: 'Never gonna buy anywhere else from now on! Thanks for the great service!',
      rating: 4
    },
    {
      comment: 'Keep up the good work!',
      rating: 3
    }
  ]

  return await Promise.all(
    feedbacks.map(async (feedback) => await createFeedback(null, feedback.comment, feedback.rating))
  )
}

async function createFeedback (UserId: number | null, comment: string, rating: number, author?: string) {
  const authoredComment = author ? `${comment} (***${author.slice(3)})` : `${comment} (anonymous)`
  return await FeedbackModel.create({ UserId, comment: authoredComment, rating }).catch((err: unknown) => {
    logger.error(`Could not insert Feedback ${authoredComment} mapped to UserId ${UserId}: ${utils.getErrorMessage(err)}`)
  })
}

async function createComplaints () {
  return await ComplaintModel.create({
    UserId: 3,
    message: 'I\'ll build my own eCommerce business! With Black Jack! And Hookers!'
  }).catch((err: unknown) => {
    logger.error(`Could not insert Complaint: ${utils.getErrorMessage(err)}`)
  })
}

async function createRecycleItem () {
  const recycles = [
    {
      UserId: 2,
      quantity: 800,
      AddressId: 4,
      date: '2270-01-17',
      isPickup: true
    },
    {
      UserId: 3,
      quantity: 1320,
      AddressId: 6,
      date: '2006-01-14',
      isPickup: true
    },
    {
      UserId: 4,
      quantity: 120,
      AddressId: 1,
      date: '2018-04-16',
      isPickup: true
    },
    {
      UserId: 1,
      quantity: 300,
      AddressId: 3,
      date: '2018-01-17',
      isPickup: true
    },
    {
      UserId: 4,
      quantity: 350,
      AddressId: 1,
      date: '2018-03-17',
      isPickup: true
    },
    {
      UserId: 3,
      quantity: 200,
      AddressId: 6,
      date: '2018-07-17',
      isPickup: true
    },
    {
      UserId: 4,
      quantity: 140,
      AddressId: 1,
      date: '2018-03-19',
      isPickup: true
    },
    {
      UserId: 1,
      quantity: 150,
      AddressId: 3,
      date: '2018-05-12',
      isPickup: true
    },
    {
      UserId: 16,
      quantity: 500,
      AddressId: 2,
      date: '2019-02-18',
      isPickup: true
    }
  ]
  return await Promise.all(
    recycles.map(async (recycle) => await createRecycle(recycle))
  )
}

async function createRecycle (data: { UserId: number, quantity: number, AddressId: number, date: string, isPickup: boolean }) {
  return await RecycleModel.create({
    UserId: data.UserId,
    AddressId: data.AddressId,
    quantity: data.quantity,
    isPickup: data.isPickup,
    date: data.date
  }).catch((err: unknown) => {
    logger.error(`Could not insert Recycling Model: ${utils.getErrorMessage(err)}`)
  })
}

async function createSecurityQuestions () {
  const questions = await loadStaticSecurityQuestionsData()

  await Promise.all(
    questions.map(async ({ question }) => {
      try {
        await SecurityQuestionModel.create({ question })
      } catch (err) {
        logger.error(`Could not insert SecurityQuestion ${question}: ${utils.getErrorMessage(err)}`)
      }
    })
  )
}

async function createSecurityAnswer (UserId: number, SecurityQuestionId: number, answer: string) {
  return await SecurityAnswerModel.create({ SecurityQuestionId, UserId, answer }).catch((err: unknown) => {
    logger.error(`Could not insert SecurityAnswer ${answer} mapped to UserId ${UserId}: ${utils.getErrorMessage(err)}`)
  })
}

async function createOrders () {
  const products = config.get<Product[]>('products')
  const basket1Products = [
    {
      quantity: 3,
      id: products[0].id,
      name: products[0].name,
      price: products[0].price,
      total: products[0].price * 3,
      bonus: Math.round(products[0].price / 10) * 3
    },
    {
      quantity: 1,
      id: products[1].id,
      name: products[1].name,
      price: products[1].price,
      total: products[1].price * 1,
      bonus: Math.round(products[1].price / 10) * 1
    }
  ]

  const basket2Products = [
    {
      quantity: 3,
      id: products[2].id,
      name: products[2].name,
      price: products[2].price,
      total: products[2].price * 3,
      bonus: Math.round(products[2].price / 10) * 3
    }
  ]

  const basket3Products = [
    {
      quantity: 3,
      id: products[0].id,
      name: products[0].name,
      price: products[0].price,
      total: products[0].price * 3,
      bonus: Math.round(products[0].price / 10) * 3
    },
    {
      quantity: 5,
      id: products[3].id,
      name: products[3].name,
      price: products[3].price,
      total: products[3].price * 5,
      bonus: Math.round(products[3].price / 10) * 5
    }
  ]

  const adminEmail = 'admin@' + config.get<string>('application.domain')
  const orders = [
    {
      orderId: security.hash(adminEmail).slice(0, 4) + '-' + utils.randomHexString(16),
      email: (adminEmail.replace(/[aeiou]/gi, '*')),
      totalPrice: basket1Products[0].total + basket1Products[1].total,
      bonus: basket1Products[0].bonus + basket1Products[1].bonus,
      products: basket1Products,
      eta: Math.floor((Math.random() * 5) + 1).toString(),
      delivered: false
    },
    {
      orderId: security.hash(adminEmail).slice(0, 4) + '-' + utils.randomHexString(16),
      email: (adminEmail.replace(/[aeiou]/gi, '*')),
      totalPrice: basket2Products[0].total,
      bonus: basket2Products[0].bonus,
      products: basket2Products,
      eta: '0',
      delivered: true
    },
    {
      orderId: security.hash('demo').slice(0, 4) + '-' + utils.randomHexString(16),
      email: 'd*m*',
      totalPrice: basket3Products[0].total + basket3Products[1].total,
      bonus: basket3Products[0].bonus + basket3Products[1].bonus,
      products: basket3Products,
      eta: '0',
      delivered: true
    }
  ]

  return await Promise.all(
    orders.map(({ orderId, email, totalPrice, bonus, products, eta, delivered }) =>
      ordersCollection.insert({
        orderId,
        email,
        totalPrice,
        bonus,
        products,
        eta,
        delivered
      }).catch((err: unknown) => {
        logger.error(`Could not insert Order ${orderId}: ${utils.getErrorMessage(err)}`)
      })
    )
  )
}

async function prepareFilesystem () {
  replace({
    regex: 'http://localhost:3000',
    replacement: config.get<string>('server.baseUrl'),
    paths: ['.well-known/csaf/provider-metadata.json'],
    recursive: true,
    silent: true
  })
}
