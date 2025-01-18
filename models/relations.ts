import { type Sequelize } from 'sequelize/types'
import { AddressModel } from './address'
import { BasketModel } from './basket'
import { BasketItemModel } from './basketitem'
import { CardModel } from './card'
import { ComplaintModel } from './complaint'
import { FeedbackModel } from './feedback'
import { ImageCaptchaModel } from './imageCaptcha'
import { MemoryModel } from './memory'
import { PrivacyRequestModel } from './privacyRequests'
import { ProductModel } from './product'
import { QuantityModel } from './quantity'
import { RecycleModel } from './recycle'
import { SecurityAnswerModel } from './securityAnswer'
import { SecurityQuestionModel } from './securityQuestion'
import { UserModel } from './user'
import { WalletModel } from './wallet'

import { makeKeyNonUpdatable } from '../lib/noUpdate'

const relationsInit = (_sequelize: Sequelize) => {
//  AddressModel.belongsTo(UserModel, {
//    constraints: true,
//    foreignKeyConstraint: true,