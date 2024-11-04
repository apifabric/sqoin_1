import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseOfferingHomeComponent } from './home/CourseOffering-home.component';
import { CourseOfferingNewComponent } from './new/CourseOffering-new.component';
import { CourseOfferingDetailComponent } from './detail/CourseOffering-detail.component';

const routes: Routes = [
  {path: '', component: CourseOfferingHomeComponent},
  { path: 'new', component: CourseOfferingNewComponent },
  { path: ':id', component: CourseOfferingDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CourseOffering-detail-permissions'
      }
    }
  },{
    path: ':course_offering_id/Assignment', loadChildren: () => import('../Assignment/Assignment.module').then(m => m.AssignmentModule),
    data: {
        oPermission: {
            permissionId: 'Assignment-detail-permissions'
        }
    }
},{
    path: ':course_offering_id/Attendance', loadChildren: () => import('../Attendance/Attendance.module').then(m => m.AttendanceModule),
    data: {
        oPermission: {
            permissionId: 'Attendance-detail-permissions'
        }
    }
},{
    path: ':course_offering_id/Grade', loadChildren: () => import('../Grade/Grade.module').then(m => m.GradeModule),
    data: {
        oPermission: {
            permissionId: 'Grade-detail-permissions'
        }
    }
}
];

export const COURSEOFFERING_MODULE_DECLARATIONS = [
    CourseOfferingHomeComponent,
    CourseOfferingNewComponent,
    CourseOfferingDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseOfferingRoutingModule { }