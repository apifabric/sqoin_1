import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Classroom-new',
  templateUrl: './Classroom-new.component.html',
  styleUrls: ['./Classroom-new.component.scss']
})
export class ClassroomNewComponent {
  @ViewChild("ClassroomForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}