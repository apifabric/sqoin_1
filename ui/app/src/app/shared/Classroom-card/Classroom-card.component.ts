import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Classroom-card.component.html',
  styleUrls: ['./Classroom-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Classroom-card]': 'true'
  }
})

export class ClassroomCardComponent {


}