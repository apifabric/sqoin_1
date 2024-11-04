import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseHomeComponent } from './home/Course-home.component';
import { CourseNewComponent } from './new/Course-new.component';
import { CourseDetailComponent } from './detail/Course-detail.component';

const routes: Routes = [
  {path: '', component: CourseHomeComponent},
  { path: 'new', component: CourseNewComponent },
  { path: ':id', component: CourseDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Course-detail-permissions'
      }
    }
  },{
    path: ':course_id/CourseOffering', loadChildren: () => import('../CourseOffering/CourseOffering.module').then(m => m.CourseOfferingModule),
    data: {
        oPermission: {
            permissionId: 'CourseOffering-detail-permissions'
        }
    }
}
];

export const COURSE_MODULE_DECLARATIONS = [
    CourseHomeComponent,
    CourseNewComponent,
    CourseDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }