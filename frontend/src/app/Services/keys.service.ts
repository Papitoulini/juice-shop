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
      map((response: { [key: string]: any }) => response),
      catchError((err) => {
        throw err
      })