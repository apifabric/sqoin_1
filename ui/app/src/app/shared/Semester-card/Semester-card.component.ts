import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Semester-card.component.html',
  styleUrls: ['./Semester-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Semester-card]': 'true'
  }
})

export class SemesterCardComponent {


}