import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {ASSIGNMENT_MODULE_DECLARATIONS, AssignmentRoutingModule} from  './Assignment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AssignmentRoutingModule
  ],
  declarations: ASSIGNMENT_MODULE_DECLARATIONS,
  exports: ASSIGNMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AssignmentModule { }