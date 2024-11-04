import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './CourseOffering-card.component.html',
  styleUrls: ['./CourseOffering-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.CourseOffering-card]': 'true'
  }
})

export class CourseOfferingCardComponent {


}