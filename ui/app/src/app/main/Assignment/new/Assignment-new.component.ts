import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Assignment-new',
  templateUrl: './Assignment-new.component.html',
  styleUrls: ['./Assignment-new.component.scss']
})
export class AssignmentNewComponent {
  @ViewChild("AssignmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}