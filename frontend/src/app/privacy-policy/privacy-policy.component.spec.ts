/*
 * Copyright (c) 2014-2024 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { HttpClientTestingModule } from '@angular/common/http/testing'
import { type ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { ConfigurationService } from '../Services/configuration.service'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'

import { PrivacyPolicyComponent } from './privacy-policy.component'
import { of } from 'rxjs'

describe('PrivacyPolicyComponent', () => {
  let component: PrivacyPolicyComponent
  let fixture: ComponentFixture<PrivacyPolicyComponent>
  let configurationService: ConfigurationService

  beforeEach(waitForAsync(() => {
    configurationService = jasmine.createSpyObj('ConfigurationService', ['getApplicationConfiguration'])