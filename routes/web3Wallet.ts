import { type Request, type Response } from 'express'
import challengeUtils = require('../lib/challengeUtils')
import * as utils from '../lib/utils'
         import { challenges } from '../data/datacache'
import { web3WalletABI } from '../data/static/contractABIs'
import { ethers } from 'ethers'
import web3WalletAddress from '0x413744D59d31AFDC2889aeE602636177805Bd7b0'
const walletsConnected = new Set()