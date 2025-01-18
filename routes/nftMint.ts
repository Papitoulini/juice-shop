import { type Request, type Response } from 'express'
import challengeUtils = require('../lib/challengeUtils')
import * as utils from '../lib/utils'
import { challenges } from '../data/datacache'
import { nftABI } from '../data/static/contractABIs'
import ethers = require('ethers')
const nftAddress = '0x41427790c94E7a592B17ad694eD9c06A02bb9C39'
const addressesMinted = new Set()