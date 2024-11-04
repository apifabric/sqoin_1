# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 04, 2024 07:49:49
# Database: sqlite:////tmp/tmp.UHWUu57XGL/sqoin_1/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Classroom(SAFRSBaseX, Base):
    """
    description: Represents physical or virtual locations where classes are held
    """
    __tablename__ = 'classroom'
    _s_collection_name = 'Classroom'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    location = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    CourseOfferingList : Mapped[List["CourseOffering"]] = relationship(back_populates="classroom")



class Course(SAFRSBaseX, Base):
    """
    description: Represents courses available for enrollment
    """
    __tablename__ = 'course'
    _s_collection_name = 'Course'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CourseOfferingList : Mapped[List["CourseOffering"]] = relationship(back_populates="course")



class Instructor(SAFRSBaseX, Base):
    """
    description: Represents instructors who teach courses
    """
    __tablename__ = 'instructor'
    _s_collection_name = 'Instructor'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    CourseOfferingList : Mapped[List["CourseOffering"]] = relationship(back_populates="instructor")



class Role(SAFRSBaseX, Base):
    """
    description: Defines roles for users in the system, such as 'Student' or 'Admin'
    """
    __tablename__ = 'role'
    _s_collection_name = 'Role'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    UserRoleList : Mapped[List["UserRole"]] = relationship(back_populates="role")



class Semester(SAFRSBaseX, Base):
    """
    description: Represents academic semesters
    """
    __tablename__ = 'semester'
    _s_collection_name = 'Semester'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)
    CourseOfferingList : Mapped[List["CourseOffering"]] = relationship(back_populates="semester")



class Student(SAFRSBaseX, Base):
    """
    description: Represents students in the system
    """
    __tablename__ = 'student'
    _s_collection_name = 'Student'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)
    enrollment_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    UserRoleList : Mapped[List["UserRole"]] = relationship(back_populates="user")
    AttendanceList : Mapped[List["Attendance"]] = relationship(back_populates="student")
    GradeList : Mapped[List["Grade"]] = relationship(back_populates="student")
    SubmissionList : Mapped[List["Submission"]] = relationship(back_populates="student")



class CourseOffering(SAFRSBaseX, Base):
    """
    description: Represents specific offerings of a course for a semester
    """
    __tablename__ = 'course_offering'
    _s_collection_name = 'CourseOffering'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    course_id = Column(ForeignKey('course.id'), nullable=False)
    instructor_id = Column(ForeignKey('instructor.id'), nullable=False)
    semester_id = Column(ForeignKey('semester.id'), nullable=False)
    classroom_id = Column(ForeignKey('classroom.id'))

    # parent relationships (access parent)
    classroom : Mapped["Classroom"] = relationship(back_populates=("CourseOfferingList"))
    course : Mapped["Course"] = relationship(back_populates=("CourseOfferingList"))
    instructor : Mapped["Instructor"] = relationship(back_populates=("CourseOfferingList"))
    semester : Mapped["Semester"] = relationship(back_populates=("CourseOfferingList"))

    # child relationships (access children)
    AssignmentList : Mapped[List["Assignment"]] = relationship(back_populates="course_offering")
    AttendanceList : Mapped[List["Attendance"]] = relationship(back_populates="course_offering")
    GradeList : Mapped[List["Grade"]] = relationship(back_populates="course_offering")



class UserRole(SAFRSBaseX, Base):
    """
    description: Junction table assigning roles to users
    """
    __tablename__ = 'user_role'
    _s_collection_name = 'UserRole'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('student.id'), nullable=False)
    role_id = Column(ForeignKey('role.id'), nullable=False)

    # parent relationships (access parent)
    role : Mapped["Role"] = relationship(back_populates=("UserRoleList"))
    user : Mapped["Student"] = relationship(back_populates=("UserRoleList"))

    # child relationships (access children)



class Assignment(SAFRSBaseX, Base):
    """
    description: Represents assignments for courses
    """
    __tablename__ = 'assignment'
    _s_collection_name = 'Assignment'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    course_offering_id = Column(ForeignKey('course_offering.id'), nullable=False)
    title = Column(String, nullable=False)
    due_date = Column(DateTime)

    # parent relationships (access parent)
    course_offering : Mapped["CourseOffering"] = relationship(back_populates=("AssignmentList"))

    # child relationships (access children)
    SubmissionList : Mapped[List["Submission"]] = relationship(back_populates="assignment")



class Attendance(SAFRSBaseX, Base):
    """
    description: Logs student attendance for courses
    """
    __tablename__ = 'attendance'
    _s_collection_name = 'Attendance'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    student_id = Column(ForeignKey('student.id'), nullable=False)
    course_offering_id = Column(ForeignKey('course_offering.id'), nullable=False)
    attendance_date = Column(DateTime, nullable=False)
    status = Column(String, nullable=False)

    # parent relationships (access parent)
    course_offering : Mapped["CourseOffering"] = relationship(back_populates=("AttendanceList"))
    student : Mapped["Student"] = relationship(back_populates=("AttendanceList"))

    # child relationships (access children)



class Grade(SAFRSBaseX, Base):
    """
    description: Represents the final grades for students in courses
    """
    __tablename__ = 'grade'
    _s_collection_name = 'Grade'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    student_id = Column(ForeignKey('student.id'), nullable=False)
    course_offering_id = Column(ForeignKey('course_offering.id'), nullable=False)
    grade = Column(String, nullable=False)

    # parent relationships (access parent)
    course_offering : Mapped["CourseOffering"] = relationship(back_populates=("GradeList"))
    student : Mapped["Student"] = relationship(back_populates=("GradeList"))

    # child relationships (access children)



class Submission(SAFRSBaseX, Base):
    """
    description: Represents student submissions for assignments
    """
    __tablename__ = 'submission'
    _s_collection_name = 'Submission'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    assignment_id = Column(ForeignKey('assignment.id'), nullable=False)
    student_id = Column(ForeignKey('student.id'), nullable=False)
    submission_date = Column(DateTime)
    grade = Column(Integer)

    # parent relationships (access parent)
    assignment : Mapped["Assignment"] = relationship(back_populates=("SubmissionList"))
    student : Mapped["Student"] = relationship(back_populates=("SubmissionList"))

    # child relationships (access children)
