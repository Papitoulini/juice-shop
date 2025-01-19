import { Component, ChangeDetectorRef } from '@angular/core'
import { KeysService } from '../Services/keys.service'
import { SnackBarHelperService } from '../Services/snack-bar-helper.service'
import { web3WalletABI } from '../../assets/public/ContractABIs'
import { getDefaultProvider, ethers } from 'ethers'
import {
  createClient,
  connect,
  disconnect,
  getAccount,
  InjectedConnector
} from '@wagmi/core'
const { ethereum } = window
const BankAddress = '0x413744D59d31AFDC2889aeE602636177805Bd7b0'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider()
})

@Component({
  selector: 'app-wallet-web3',
  templateUrl: './wallet-web3.component.html',
  styleUrls: ['./wallet-web3.component.scss']
})
export class WalletWeb3Component {
  constructor (
    private readonly keysService: KeysService,
    private readonly snackBarHelperService: SnackBarHelperService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  userData: object
  session = false
  walletBalance = '0'
  myBEEBalance = 0
  inputAmount: number = null
  successResponse = false
  mintButtonDisabled = true
  challengeSolved = false
  errorMessage = ''
  metamaskAddress = ''
  ngOnInit (): void {
    this.handleAuth()
    window.ethereum.on('chainChanged', this.handleChainChanged.bind(this))
TypeScript
  }

  async handleChainChanged(chainId: string) {
    await this.handleAuth();
  }