import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorHomeComponent } from './home/Instructor-home.component';
import { InstructorNewComponent } from './new/Instructor-new.component';
import { InstructorDetailComponent } from './detail/Instructor-detail.component';

const routes: Routes = [
  {path: '', component: InstructorHomeComponent},
  { path: 'new', component: InstructorNewComponent },
  { path: ':id', component: InstructorDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Instructor-detail-permissions'
      }
    }
  },{
    path: ':instructor_id/CourseOffering', loadChildren: () => import('../CourseOffering/CourseOffering.module').then(m => m.CourseOfferingModule),
    data: {
        oPermission: {
            permissionId: 'CourseOffering-detail-permissions'
        }
    }
}
];

export const INSTRUCTOR_MODULE_DECLARATIONS = [
    InstructorHomeComponent,
    InstructorNewComponent,
    InstructorDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }