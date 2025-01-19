import { Component, Input, type OnChanges, type OnInit, type SimpleChanges } from '@angular/core'

import { type EnrichedChallenge } from '../../types/EnrichedChallenge'

interface DifficultySummary {
  difficulty: 0 | 1 | 2 | 3 | 4 | 5 | 6
  availableChallenges: number
  solvedChallenges: number
}

// interface doesn't work here
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type DifficultySummaries = Record<number, DifficultySummary>

const INITIAL_SUMMARIES: Readonly<DifficultySummaries> = Object.freeze({
  1: { difficulty: 1, availableChallenges: 0, solvedChallenges: 0 },
  2: { difficulty: 2, availableChallenges: 0, solvedChallenges: 0 },
  3: { difficulty: 3, availableChallenges: 0, solvedChallenges: 0 },
  4: { difficulty: 4, availableChallenges: 0, solvedChallenges: 0 },
  5: { difficulty: 5, availableChallenges: 0, solvedChallenges: 0 },
  6: { difficulty: 6, availableChallenges: 0, solvedChallenges: 0 }
})

@Component({
  selector: 'difficulty-overview-score-card',
  templateUrl: './difficulty-overview-score-card.component.html',
  styleUrls: ['./difficulty-overview-score-card.component.scss']
})
export class DifficultyOverviewScoreCardComponent implements OnInit, OnChanges {
  @Input()
  public allChallenges: EnrichedChallenge[] = []

  // includes hacking and coding challenges (both find it and fix it)
  public totalChallenges: number
  public solvedChallenges: number

  public difficultySummaries: DifficultySummary[] = [
    { difficulty: 1, availableChallenges: 0, solvedChallenges: 0 },
    { difficulty: 2, availableChallenges: 0, solvedChallenges: 0 },
    { difficulty: 3, availableChallenges: 0, solvedChallenges: 0 },
    { difficulty: 4, availableChallenges: 0, solvedChallenges: 0 },
    { difficulty: 5, availableChallenges: 0, solvedChallenges: 0 },
    { difficulty: 6, availableChallenges: 0, solvedChallenges: 0 }
  ]

  ngOnInit (): void {
    this.updatedNumberOfSolvedChallenges()
TypeScript
  }

  ngOnChanges (changes: SimpleChanges): void {
    this.updatedNumberOfSolvedChallenges && this.updatedNumberOfSolvedChallenges()
  }