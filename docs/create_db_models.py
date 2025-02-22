# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Student(Base):
    """description: Represents students in the system"""
    __tablename__ = 'student'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String)
    enrollment_date = Column(DateTime, default=datetime.datetime.utcnow)

class Course(Base):
    """description: Represents courses available for enrollment"""
    __tablename__ = 'course'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    description = Column(String)

class Instructor(Base):
    """description: Represents instructors who teach courses"""
    __tablename__ = 'instructor'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String)

class Classroom(Base):
    """description: Represents physical or virtual locations where classes are held"""
    __tablename__ = 'classroom'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    location = Column(String, nullable=False)

class Semester(Base):
    """description: Represents academic semesters"""
    __tablename__ = 'semester'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)

class CourseOffering(Base):
    """description: Represents specific offerings of a course for a semester"""
    __tablename__ = 'course_offering'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    course_id = Column(Integer, ForeignKey('course.id'), nullable=False)
    instructor_id = Column(Integer, ForeignKey('instructor.id'), nullable=False)
    semester_id = Column(Integer, ForeignKey('semester.id'), nullable=False)
    classroom_id = Column(Integer, ForeignKey('classroom.id'))

class Attendance(Base):
    """description: Logs student attendance for courses"""
    __tablename__ = 'attendance'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    student_id = Column(Integer, ForeignKey('student.id'), nullable=False)
    course_offering_id = Column(Integer, ForeignKey('course_offering.id'), nullable=False)
    attendance_date = Column(DateTime, nullable=False, default=datetime.datetime.utcnow)
    status = Column(String, nullable=False)  # e.g., "Present", "Absent"

class Assignment(Base):
    """description: Represents assignments for courses"""
    __tablename__ = 'assignment'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    course_offering_id = Column(Integer, ForeignKey('course_offering.id'), nullable=False)
    title = Column(String, nullable=False)
    due_date = Column(DateTime)

class Submission(Base):
    """description: Represents student submissions for assignments"""
    __tablename__ = 'submission'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    assignment_id = Column(Integer, ForeignKey('assignment.id'), nullable=False)
    student_id = Column(Integer, ForeignKey('student.id'), nullable=False)
    submission_date = Column(DateTime, default=datetime.datetime.utcnow)
    grade = Column(Integer)

class Grade(Base):
    """description: Represents the final grades for students in courses"""
    __tablename__ = 'grade'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    student_id = Column(Integer, ForeignKey('student.id'), nullable=False)
    course_offering_id = Column(Integer, ForeignKey('course_offering.id'), nullable=False)
    grade = Column(String, nullable=False)  # e.g. "A", "B", "C"

class Role(Base):
    """description: Defines roles for users in the system, such as 'Student' or 'Admin'"""
    __tablename__ = 'role'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

class UserRole(Base):
    """description: Junction table assigning roles to users"""
    __tablename__ = 'user_role'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('student.id'), nullable=False)
    role_id = Column(Integer, ForeignKey('role.id'), nullable=False)

# Create engine and initialize the database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a session to interact with the database
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
student1 = Student(name="John Doe", email="john.doe@example.com")
student2 = Student(name="Jane Smith", email="jane.smith@example.com")

role_student = Role(name="Student")
role_admin = Role(name="Admin")

course1 = Course(title="Mathematics 101", description="Introductory Mathematics")
course2 = Course(title="Physics 101", description="Introductory Physics")

instructor1 = Instructor(name="Dr. Alan Grant", email="alan.grant@example.com")
instructor2 = Instructor(name="Dr. Ellie Sattler", email="ellie.sattler@example.com")

classroom1 = Classroom(location="Building A, Room 101")
classroom2 = Classroom(location="Online - Virtual Room 202")

semester1 = Semester(name="Fall 2023", start_date=datetime.datetime(2023, 9, 1), end_date=datetime.datetime(2023, 12, 15))

course_offering1 = CourseOffering(course_id=1, instructor_id=1, semester_id=1, classroom_id=1)
course_offering2 = CourseOffering(course_id=2, instructor_id=2, semester_id=1, classroom_id=2)

attendance1 = Attendance(student_id=1, course_offering_id=1, status="Present", attendance_date=datetime.datetime(2023, 9, 10))
attendance2 = Attendance(student_id=2, course_offering_id=2, status="Absent", attendance_date=datetime.datetime(2023, 9, 10))

assignment1 = Assignment(course_offering_id=1, title="Homework 1", due_date=datetime.datetime(2023, 10, 1))
assignment2 = Assignment(course_offering_id=2, title="Lab Report 1", due_date=datetime.datetime(2023, 10, 15))

submission1 = Submission(assignment_id=1, student_id=1, grade=85)
submission2 = Submission(assignment_id=2, student_id=2, grade=90)

grade1 = Grade(student_id=1, course_offering_id=1, grade="A")
grade2 = Grade(student_id=2, course_offering_id=2, grade="B")

user_role1 = UserRole(user_id=1, role_id=1)
user_role2 = UserRole(user_id=2, role_id=1)

session.add_all([
    student1, student2,
    role_student, role_admin,
    course1, course2,
    instructor1, instructor2,
    classroom1, classroom2,
    semester1,
    course_offering1, course_offering2,
    attendance1, attendance2,
    assignment1, assignment2,
    submission1, submission2,
    grade1, grade2,
    user_role1, user_role2])

session.commit()
session.close()
