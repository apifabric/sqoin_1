import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Assignment', loadChildren: () => import('./Assignment/Assignment.module').then(m => m.AssignmentModule) },
    
        { path: 'Attendance', loadChildren: () => import('./Attendance/Attendance.module').then(m => m.AttendanceModule) },
    
        { path: 'Classroom', loadChildren: () => import('./Classroom/Classroom.module').then(m => m.ClassroomModule) },
    
        { path: 'Course', loadChildren: () => import('./Course/Course.module').then(m => m.CourseModule) },
    
        { path: 'CourseOffering', loadChildren: () => import('./CourseOffering/CourseOffering.module').then(m => m.CourseOfferingModule) },
    
        { path: 'Grade', loadChildren: () => import('./Grade/Grade.module').then(m => m.GradeModule) },
    
        { path: 'Instructor', loadChildren: () => import('./Instructor/Instructor.module').then(m => m.InstructorModule) },
    
        { path: 'Role', loadChildren: () => import('./Role/Role.module').then(m => m.RoleModule) },
    
        { path: 'Semester', loadChildren: () => import('./Semester/Semester.module').then(m => m.SemesterModule) },
    
        { path: 'Student', loadChildren: () => import('./Student/Student.module').then(m => m.StudentModule) },
    
        { path: 'Submission', loadChildren: () => import('./Submission/Submission.module').then(m => m.SubmissionModule) },
    
        { path: 'UserRole', loadChildren: () => import('./UserRole/UserRole.module').then(m => m.UserRoleModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }