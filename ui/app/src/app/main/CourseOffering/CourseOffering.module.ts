import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {COURSEOFFERING_MODULE_DECLARATIONS, CourseOfferingRoutingModule} from  './CourseOffering-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CourseOfferingRoutingModule
  ],
  declarations: COURSEOFFERING_MODULE_DECLARATIONS,
  exports: COURSEOFFERING_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CourseOfferingModule { }