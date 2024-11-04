import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Semester-new',
  templateUrl: './Semester-new.component.html',
  styleUrls: ['./Semester-new.component.scss']
})
export class SemesterNewComponent {
  @ViewChild("SemesterForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}