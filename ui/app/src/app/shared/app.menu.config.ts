import { MenuRootItem } from 'ontimize-web-ngx';

import { AssignmentCardComponent } from './Assignment-card/Assignment-card.component';

import { AttendanceCardComponent } from './Attendance-card/Attendance-card.component';

import { ClassroomCardComponent } from './Classroom-card/Classroom-card.component';

import { CourseCardComponent } from './Course-card/Course-card.component';

import { CourseOfferingCardComponent } from './CourseOffering-card/CourseOffering-card.component';

import { GradeCardComponent } from './Grade-card/Grade-card.component';

import { InstructorCardComponent } from './Instructor-card/Instructor-card.component';

import { RoleCardComponent } from './Role-card/Role-card.component';

import { SemesterCardComponent } from './Semester-card/Semester-card.component';

import { StudentCardComponent } from './Student-card/Student-card.component';

import { SubmissionCardComponent } from './Submission-card/Submission-card.component';

import { UserRoleCardComponent } from './UserRole-card/UserRole-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Assignment', name: 'ASSIGNMENT', icon: 'view_list', route: '/main/Assignment' }
    
        ,{ id: 'Attendance', name: 'ATTENDANCE', icon: 'view_list', route: '/main/Attendance' }
    
        ,{ id: 'Classroom', name: 'CLASSROOM', icon: 'view_list', route: '/main/Classroom' }
    
        ,{ id: 'Course', name: 'COURSE', icon: 'view_list', route: '/main/Course' }
    
        ,{ id: 'CourseOffering', name: 'COURSEOFFERING', icon: 'view_list', route: '/main/CourseOffering' }
    
        ,{ id: 'Grade', name: 'GRADE', icon: 'view_list', route: '/main/Grade' }
    
        ,{ id: 'Instructor', name: 'INSTRUCTOR', icon: 'view_list', route: '/main/Instructor' }
    
        ,{ id: 'Role', name: 'ROLE', icon: 'view_list', route: '/main/Role' }
    
        ,{ id: 'Semester', name: 'SEMESTER', icon: 'view_list', route: '/main/Semester' }
    
        ,{ id: 'Student', name: 'STUDENT', icon: 'view_list', route: '/main/Student' }
    
        ,{ id: 'Submission', name: 'SUBMISSION', icon: 'view_list', route: '/main/Submission' }
    
        ,{ id: 'UserRole', name: 'USERROLE', icon: 'view_list', route: '/main/UserRole' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AssignmentCardComponent

    ,AttendanceCardComponent

    ,ClassroomCardComponent

    ,CourseCardComponent

    ,CourseOfferingCardComponent

    ,GradeCardComponent

    ,InstructorCardComponent

    ,RoleCardComponent

    ,SemesterCardComponent

    ,StudentCardComponent

    ,SubmissionCardComponent

    ,UserRoleCardComponent

];