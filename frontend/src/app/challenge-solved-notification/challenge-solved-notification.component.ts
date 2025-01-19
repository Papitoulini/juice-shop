/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { TranslateService } from '@ngx-translate/core'
import { ChallengeService } from '../Services/challenge.service'
import { ConfigurationService } from '../Services/configuration.service'
import { ChangeDetectorRef, Component, NgZone, type OnInit } from '@angular/core'
import { CookieService } from 'ngx-cookie'
import { CountryMappingService } from 'src/app/Services/country-mapping.service'
import { SocketIoService } from '../Services/socket-io.service'

         interface ChallengeSolvedMessage {
         challenge: string
         hidden?: string | null
         isRestore?: boolean | undefined
         flag: string
         key?: string | undefined