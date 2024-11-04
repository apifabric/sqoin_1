import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmissionHomeComponent } from './home/Submission-home.component';
import { SubmissionNewComponent } from './new/Submission-new.component';
import { SubmissionDetailComponent } from './detail/Submission-detail.component';

const routes: Routes = [
  {path: '', component: SubmissionHomeComponent},
  { path: 'new', component: SubmissionNewComponent },
  { path: ':id', component: SubmissionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Submission-detail-permissions'
      }
    }
  }
];

export const SUBMISSION_MODULE_DECLARATIONS = [
    SubmissionHomeComponent,
    SubmissionNewComponent,
    SubmissionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionRoutingModule { }