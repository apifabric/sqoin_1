import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SUBMISSION_MODULE_DECLARATIONS, SubmissionRoutingModule} from  './Submission-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    SubmissionRoutingModule
  ],
  declarations: SUBMISSION_MODULE_DECLARATIONS,
  exports: SUBMISSION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SubmissionModule { }