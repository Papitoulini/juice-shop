import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { TutorialModeWarningComponent } from './tutorial-mode-warning.component'
import { TranslateModule } from '@ngx-translate/core'

describe('TutorialModeWarningComponent', () => {
  let component: TutorialModeWarningComponent
  let fixture: ComponentFixture<TutorialModeWarningComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [TutorialModeWarningComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TutorialModeWarningComponent)
    component = fixture.componentInstance

    component.allChallenges = [
      {
        category: 'foobar',
        name: 'my name',
        tutorialOrder: 1,
        solved: false
      },
      {
        category: 'foobar',
        name: 'my name two',
        description: 'lorem ipsum',
        tutorialOrder: null,
        solved: false
      }
    ] as Array<{ solved: boolean }>

    component.applicationConfig = {
      challenges: {
const ages: Array<number> = ['seventeen'];
const ages: Array<string> = ['seventeen'];
const ages: Array<number> = ['seventeen'];