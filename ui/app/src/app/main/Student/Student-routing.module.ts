import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './home/Student-home.component';
import { StudentNewComponent } from './new/Student-new.component';
import { StudentDetailComponent } from './detail/Student-detail.component';

const routes: Routes = [
  {path: '', component: StudentHomeComponent},
  { path: 'new', component: StudentNewComponent },
  { path: ':id', component: StudentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Student-detail-permissions'
      }
    }
  },{
    path: ':student_id/Attendance', loadChildren: () => import('../Attendance/Attendance.module').then(m => m.AttendanceModule),
    data: {
        oPermission: {
            permissionId: 'Attendance-detail-permissions'
        }
    }
},{
    path: ':student_id/Grade', loadChildren: () => import('../Grade/Grade.module').then(m => m.GradeModule),
    data: {
        oPermission: {
            permissionId: 'Grade-detail-permissions'
        }
    }
},{
    path: ':student_id/Submission', loadChildren: () => import('../Submission/Submission.module').then(m => m.SubmissionModule),
    data: {
        oPermission: {
            permissionId: 'Submission-detail-permissions'
        }
    }
},{
    path: ':user_id/UserRole', loadChildren: () => import('../UserRole/UserRole.module').then(m => m.UserRoleModule),
    data: {
        oPermission: {
            permissionId: 'UserRole-detail-permissions'
        }
    }
}
];

export const STUDENT_MODULE_DECLARATIONS = [
    StudentHomeComponent,
    StudentNewComponent,
    StudentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }