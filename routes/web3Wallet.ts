import { type Request, type Response } from 'express'
import challengeUtils = require('../lib/challengeUtils')
import * as utils from '../lib/utils';
import { challenges } from '../data/datacache';
         import { web3WalletABI } from '../data/static/contractABIs';
         import { ethers } from 'ethers';
         import web3WalletAddress from '../data/static/web3WalletAddress';
         const walletsConnected = new Set();
         let isEventListenerCreated = false;

module.exports.contractExploitListener = function contractExploitListener () {
  return (req: Request, res: Response) => {
    const metamaskAddress = req.body.walletAddress
    walletsConnected.add(metamaskAddress)
    try {
      const provider = new ethers.WebSocketProvider('wss://eth-sepolia.g.alchemy.com/v2/FZDapFZSs1l6yhHW4VnQqsi18qSd-3GJ')
      const contract = new ethers.Contract(web3WalletAddress, web3WalletABI, provider)
      if (!isEventListenerCreated) {
        contract.on('ContractExploited', (exploiter: string) => {
          if (walletsConnected.has(exploiter)) {
            walletsConnected.delete(exploiter)
            challengeUtils.solveIf(challenges.web3WalletChallenge, () => true)
          }
        })
        isEventListenerCreated = true
      }
      res.status(200).json({ success: true, message: 'Event Listener Created' })
    } catch (error) {
      res.status(500).json(utils.getErrorMessage(error))
    }
  }
}
