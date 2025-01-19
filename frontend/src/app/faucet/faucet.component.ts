import { Component, ChangeDetectorRef } from '@angular/core'
import { KeysService } from '../Services/keys.service'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'
import { TranslateService } from '@ngx-translate/core'
import {
  BeeFaucetABI,
  BeeTokenABI,
  nftABI
} from '../../assets/public/ContractABIs'
import { getDefaultProvider, ethers, type BigNumber } from 'ethers'
import {
  createClient,
  connect,
  disconnect,
  getAccount,
  InjectedConnector
} from '@wagmi/core'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider()
})
const { ethereum } = window

const nftAddress = '0x41427790c94E7a592B17ad694eD9c06A02bb9C39'
const BeeTokenAddress = '0x36435796Ca9be2bf150CE0dECc2D8Fab5C4d6E13'
const BeeFaucetAddress = '0x860e3616aD0E0dEDc23352891f3E10C4131EA5BC'

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.scss']
})
export class FaucetComponent {
  constructor (
    private readonly keysService: KeysService,
    private readonly snackBarHelperService: SnackBarHelperService,
    private readonly translateService: TranslateService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  userData: object
  session = false
  deployedContractAddress = ''
  BEEBalance = 0
  myBEEBalance = 0
  withdrawAmount: number = null
  successResponse = false
  mintButtonDisabled = true
  challengeSolved = false
  nftMintText = 'Mint the Pot - 1000 BEE'
  errorMessage = ''
  metamaskAddress = ''

  ngOnInit (): void {
    this.translateService.get('NFT_MINT_TEXT_INTRO').subscribe((translatedString: string) => {
      this.nftMintText = translatedString
    })
    this.handleAuth()
    this.checkNftMinted()
    this.nftMintListener()
    window.ethereum.on('chainChanged', this.handleChainChanged.bind(this))
  }

  nftMintListener () {
    this.keysService.nftMintListen().subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  checkNftMinted () {
    this.keysService.checkNftMinted().subscribe(
      (response) => {
        const challengeSolvedStatus = response.data[0].solved
        this.mintButtonDisabled = challengeSolvedStatus
        this.challengeSolved = challengeSolvedStatus
        if (challengeSolvedStatus) {
          this.translateService.get('NFT_MINT_TEXT_SUCCESS').subscribe((translatedString: string) => {
            this.nftMintText = translatedString
          })
        }
      },
      (error) => {
        console.error(error)
        this.successResponse = false
      }
    )
  }

  async fetchMyBeeBalance () {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      const contract = new ethers.Contract(
        BeeTokenAddress,
        BeeTokenABI,
        signer
      )
      const userAddress = await signer.getAddress()
      const balanceBigNumber: BigNumber = await contract.balanceOf(userAddress)
      console.log(balanceBigNumber)
      this.myBEEBalance = balanceBigNumber
        .div(ethers.constants.WeiPerEther)
        .toNumber()
      if (this.myBEEBalance >= 1000 && !this.challengeSolved) {
        this.mintButtonDisabled = false
      }
      if (this.myBEEBalance <= 1000 && !this.challengeSolved) {
        this.mintButtonDisabled = true
      }
    } catch (error) {
      console.error('Error fetching BEE balance:', error)
    }
  }

  async fetchBeeBalance () {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()

      const contract = new ethers.Contract(
        BeeFaucetAddress,
        BeeFaucetABI,
        signer
      )
      const balance = await contract.balance()
      console.log(balance)
      this.BEEBalance = balance
    } catch (error) {
      console.error('Error fetching BEE balance:', error)
    }
         TypeScript
  }

  async handleChainChanged(chainId: string) {
    await this.handleAuth();
  }