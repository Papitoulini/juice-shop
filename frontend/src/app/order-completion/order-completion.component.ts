// src/app/order-completion/order-completion.component.ts

import { Component, OnInit } from '@angular/core'
import { TrackOrderService } from '../Services/track-order.service'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { MatTableDataSource } from '@angular/material/table'
import { BasketService } from '../Services/basket.service'
import { AddressService } from '../Services/address.service'
import { ConfigurationService } from '../Services/configuration.service'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


export interface Product {
  name: string
  price: number
  quantity: number
  // Add other relevant product properties
}

export interface OrderDetails {
  totalPrice: number
  addressId: string
  paymentId: string
  itemTotal: number
  eta: string | number // Adjust type based on actual data
  products: Product[]
  bonus: number
}

library.add(faTwitter)

@Component({
  selector: 'app-order-completion',
  templateUrl: './order-completion.component.html',
  styleUrls: ['./order-completion.component.scss']
})
export class OrderCompletionComponent implements OnInit {
  public tableColumns = ['product', 'price', 'quantity', 'total price']
  public dataSource: MatTableDataSource<Product> // Specify the type
  public orderId: string
  public orderDetails: OrderDetails = {
    totalPrice: 0,
    addressId: '',
    paymentId: '',
    itemTotal: 0,
    eta: '?',
    products: [],
    bonus: 0
  }
  public deliveryPrice = 0
  public promotionalDiscount = 0
  public address: any // Consider typing this as well
  public tweetText: string = 'I just purchased'

  constructor (
    private readonly configurationService: ConfigurationService,
    private readonly addressService: AddressService,
    private readonly trackOrderService: TrackOrderService,
    public activatedRoute: ActivatedRoute,
    private readonly basketService: BasketService
  ) { }

  ngOnInit () {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.orderId = paramMap.get('id') || ''
      this.trackOrderService.find(this.orderId).subscribe((results) => {
        const data = results.data[0]
        this.promotionalDiscount = data.promotionalAmount ? parseFloat(data.promotionalAmount) : 0
        this.deliveryPrice = data.deliveryPrice ? parseFloat(data.deliveryPrice) : 0
        this.orderDetails.totalPrice = data.totalPrice
        this.orderDetails.addressId = data.addressId
        this.orderDetails.paymentId = data.paymentId
        this.orderDetails.itemTotal = data.totalPrice + this.promotionalDiscount - this.deliveryPrice
        this.orderDetails.eta = data.eta || '?'
        this.orderDetails.products = data.products
        this.orderDetails.bonus = data.bonus
        this.dataSource = new MatTableDataSource<Product>(this.orderDetails.products)
        for (const product of this.orderDetails.products) {
          this.tweetText += `%0a- ${product.name}`
        }
        this.tweetText = this.truncateTweet(this.tweetText)
        this.configurationService.getApplicationConfiguration().subscribe((config) => {
          if (config?.application?.social) {
            this.tweetText += '%0afrom '
            if (config.application.social.twitterUrl) {
              this.tweetText += config.application.social.twitterUrl.replace('https://twitter.com/', '@')
            } else {
              this.tweetText += config.application.name
            }
          }
        }, (err) => { console.log(err) })
        this.addressService.getById(this.orderDetails.addressId).subscribe((address) => {
          this.address = address
        }, (error) => { console.log(error) })
      }, (err) => { console.log(err) })
    }, (err) => { console.log(err) })
  }

  openConfirmationPDF () {
    const redirectUrl = `${this.basketService.hostServer}/ftp/order_${this.orderId}.pdf`
    window.open(redirectUrl, '_blank')
  }

  truncateTweet = (tweet: string, maxLength = 140): string | null => {
    if (!tweet) return null
    const showDots = tweet.length > maxLength
    return `${tweet.substring(0, maxLength)}${showDots ? '...' : ''}`
  }
}
