import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Assignment-card.component.html',
  styleUrls: ['./Assignment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Assignment-card]': 'true'
  }
})

export class AssignmentCardComponent {


}