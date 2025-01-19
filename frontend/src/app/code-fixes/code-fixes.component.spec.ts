import { type ComponentFixture, TestBed } from '@angular/core/testing'
import { CookieModule, CookieService } from 'ngx-cookie'

import { CodeFixesComponent } from './code-fixes.component'

describe('CodeFixesComponent', () => {
         let component: CodeFixesComponent
         let fixture: ComponentFixture<CodeFixesComponent>
         let cookieService: CookieService

         beforeEach(async () => {
           await TestBed.configureTestingModule({