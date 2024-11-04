import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SemesterHomeComponent } from './home/Semester-home.component';
import { SemesterNewComponent } from './new/Semester-new.component';
import { SemesterDetailComponent } from './detail/Semester-detail.component';

const routes: Routes = [
  {path: '', component: SemesterHomeComponent},
  { path: 'new', component: SemesterNewComponent },
  { path: ':id', component: SemesterDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Semester-detail-permissions'
      }
    }
  },{
    path: ':semester_id/CourseOffering', loadChildren: () => import('../CourseOffering/CourseOffering.module').then(m => m.CourseOfferingModule),
    data: {
        oPermission: {
            permissionId: 'CourseOffering-detail-permissions'
        }
    }
}
];

export const SEMESTER_MODULE_DECLARATIONS = [
    SemesterHomeComponent,
    SemesterNewComponent,
    SemesterDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemesterRoutingModule { }