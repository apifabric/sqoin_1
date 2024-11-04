import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CourseOffering-new',
  templateUrl: './CourseOffering-new.component.html',
  styleUrls: ['./CourseOffering-new.component.scss']
})
export class CourseOfferingNewComponent {
  @ViewChild("CourseOfferingForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}