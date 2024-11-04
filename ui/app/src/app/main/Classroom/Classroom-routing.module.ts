import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassroomHomeComponent } from './home/Classroom-home.component';
import { ClassroomNewComponent } from './new/Classroom-new.component';
import { ClassroomDetailComponent } from './detail/Classroom-detail.component';

const routes: Routes = [
  {path: '', component: ClassroomHomeComponent},
  { path: 'new', component: ClassroomNewComponent },
  { path: ':id', component: ClassroomDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Classroom-detail-permissions'
      }
    }
  },{
    path: ':classroom_id/CourseOffering', loadChildren: () => import('../CourseOffering/CourseOffering.module').then(m => m.CourseOfferingModule),
    data: {
        oPermission: {
            permissionId: 'CourseOffering-detail-permissions'
        }
    }
}
];

export const CLASSROOM_MODULE_DECLARATIONS = [
    ClassroomHomeComponent,
    ClassroomNewComponent,
    ClassroomDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }