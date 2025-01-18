import { Component, Input, type OnChanges, type OnInit, type SimpleChanges } from '@angular/core'

import { type EnrichedChallenge } from '../../types/EnrichedChallenge'

@Component({
  selector: 'coding-challenge-progress-score-card',
  templateUrl: './coding-challenge-progress-score-card.component.html',
  styleUrls: ['./coding-challenge-progress-score-card.component.scss']
})
export class CodingChallengeProgressScoreCardComponent implements OnInit, OnChanges {
  @Input()
  public allChallenges: EnrichedChallenge[] = []

  public availableCodingChallenges: number
  public solvedCodingChallenges: number

  ngOnInit (): void {
    this.updatedNumberOfSolvedChallenges()
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Commented out the unused function call
    // this.updatedNumberOfSolvedChallenges()
  }