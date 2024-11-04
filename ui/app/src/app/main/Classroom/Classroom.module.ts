import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CLASSROOM_MODULE_DECLARATIONS, ClassroomRoutingModule} from  './Classroom-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ClassroomRoutingModule
  ],
  declarations: CLASSROOM_MODULE_DECLARATIONS,
  exports: CLASSROOM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClassroomModule { }