import { type ComponentFixture, TestBed } from '@angular/core/testing'

import { DifficultyOverviewScoreCardComponent } from './difficulty-overview-score-card.component'
import { ScoreCardComponent } from '../score-card/score-card.component'
import { TranslateModule } from '@ngx-translate/core'

describe('DifficultyOverviewScoreCardComponent', () => {
  let component: DifficultyOverviewScoreCardComponent
  let fixture: ComponentFixture<DifficultyOverviewScoreCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ScoreCardComponent,
        DifficultyOverviewScoreCardComponent
      ],
      imports: [TranslateModule.forRoot()]
    })
      .compileComponents()

    fixture = TestBed.createComponent(DifficultyOverviewScoreCardComponent)
    component = fixture.componentInstance
    component.allChallenges = []
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('difficultySummaries', () => {
    it('should calculate difficulty summaries correctly for empty list of challenges', () => {
      expect(DifficultyOverviewScoreCardComponent.calculateDifficultySummaries([])).toEqual([
        { difficulty: 1, availableChallenges: 0, solvedChallenges: 0 },
        { difficulty: 2, availableChallenges: 0, solvedChallenges: 0 },
        { difficulty: 3, availableChallenges: 0, solvedChallenges: 0 },
        { difficulty: 4, availableChallenges: 0, solvedChallenges: 0 },
        { difficulty: 5, availableChallenges: 0, solvedChallenges: 0 },
        { difficulty: 6, availableChallenges: 0, solvedChallenges: 0 }
      ])
    })
         it('should calculate difficulty summaries', () => {
         expect(DifficultyOverviewScoreCardComponent.calculateDifficultySummaries([
           { difficulty: 1, solved: true, hasCodingChallenge: false } as DifficultyOverviewScoreCardComponent.Summary,
           { difficulty: 1, solved: true, hasCodingChallenge: true, codingChallengeStatus: 1 } as DifficultyOverviewScoreCardComponent.Summary
         ])).toEqual([
           { difficulty: 1, availableChallenges: 4, solvedChallenges: 2 },
const ages: number[] = ['seventeen'];
const ages: number[] = ['seventeen'];
const ages: number[] = [17, 18, 19];
const ages: number[] = [17];
const ages: number[] = [17];