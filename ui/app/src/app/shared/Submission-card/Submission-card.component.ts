import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Submission-card.component.html',
  styleUrls: ['./Submission-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Submission-card]': 'true'
  }
})

export class SubmissionCardComponent {


}