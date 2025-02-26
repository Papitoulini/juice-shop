import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class KeysService {
  private readonly hostServer = environment.hostServer
  private readonly host = this.hostServer + '/rest/web3'

  constructor (private readonly http: HttpClient) {}

  nftUnlocked () {
    return this.http.get(this.host + '/nftUnlocked').pipe(
      map((response: { unlocked: boolean, status: string }) => response),
      catchError((err) => {
        throw err
      })
    )
  }

  nftMintListen () {
    return this.http.get(this.host + '/nftMintListen').pipe(
      map((response: { mintStatus: boolean }) => response),
      catchError((err) => {
        throw err
      })
    )
  }

  checkNftMinted () {
    return this.http.get(this.hostServer + '/api/Challenges/?key=nftMintChallenge').pipe(
      map((response: { minted: boolean, data: object }) => response),
      catchError((err) => {
        throw err
      })
    )
  }

  submitKey (privateKey: string) {
    const endpoint = this.host + '/submitKey'
    const params = { privateKey }
    return this.http.post(endpoint, params).pipe(
      map((response: { success: boolean, message: string }) => response),
      catchError((err) => {
        throw err
      })
    )
  }

  verifyNFTWallet (walletAddress: string) {
    const endpoint = this.host + '/walletNFTVerify'
    const params = { walletAddress }
    return this.http.post(endpoint, params).pipe(
      map((response: { verified: boolean, success: boolean, status: string }) => response),
      catchError((err) => {
        throw err
      })
    )
  }

  walletAddressSend (walletAddress: string) {
    const endpoint = this.host + '/walletExploitAddress'
    const params = { walletAddress }
    return this.http.post(endpoint, params).pipe(
      map((response: { sent: boolean, success: boolean, address: string, status: string }) => response),
      catchError((err) => {
        throw err
      })
    )
  }
}