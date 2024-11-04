import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SEMESTER_MODULE_DECLARATIONS, SemesterRoutingModule} from  './Semester-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SemesterRoutingModule
  ],
  declarations: SEMESTER_MODULE_DECLARATIONS,
  exports: SEMESTER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SemesterModule { }