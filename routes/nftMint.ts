import { type Request, type Response } from 'express'
import challengeUtils = require('../lib/challengeUtils')
         import * as utils from '../lib/utils';
         import { challenges } from '../data/datacache';
         import { nftABI } from '../data/static/contractABIs';
         import { ethers } from 'ethers';
         import { nftAddress } from '../data/static/nftAddress'; // Corrected line
         const addressesMinted = new Set();