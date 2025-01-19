/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { ChatbotService } from '../Services/chatbot.service'
import { UserService } from '../Services/user.service'
import { Component, type OnDestroy, type OnInit } from '@angular/core'
import { UntypedFormControl } from '@angular/forms'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { FormSubmitService } from '../Services/form-submit.service'
import { TranslateService } from '@ngx-translate/core'
import { CookieService } from 'ngx-cookie'

library.add(faBomb)

enum MessageSources {
  user = 'user',
  bot = 'bot'
}

interface ChatMessage {
  author: MessageSources.user | MessageSources.bot
  body: string
}

interface MessageActions {
  response: string
  namequery: string
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit, OnDestroy {
  public messageControl: UntypedFormControl = new UntypedFormControl()
  public messages: ChatMessage[] = []
  public juicyImageSrc: string = 'assets/public/images/ChatbotAvatar.png'
  public profileImageSrc: string = 'assets/public/images/uploads/default.svg'
  public messageActions: MessageActions = {
    response: 'query',
    namequery: 'setname'
  }

  public currentAction: string = this.messageActions.response

  private chatScrollDownTimeoutId: ReturnType<typeof setTimeout> | null = null

  constructor (private readonly userService: UserService, private readonly chatbotService: ChatbotService, private readonly cookieService: CookieService, private readonly formSubmitService: FormSubmitService, private readonly translate: TranslateService) { }

  ngOnDestroy (): void {
    if (this.chatScrollDownTimeoutId) {
      clearTimeout(this.chatScrollDownTimeoutId)
    }
  }

  ngOnInit () {
    this.chatbotService.getChatbotStatus().subscribe((response) => {
      this.messages.push({
        author: MessageSources.bot,
        body: response.body
      })
      if (response.action) {
        this.currentAction = this.messageActions[response.action]
      }
         TypeScript
    this.userService.whoAmI().subscribe((user: { profileImage: string }) => {
      this.profileImageSrc = user.profileImage
    }, (err) => {
      console.log(err)
    })