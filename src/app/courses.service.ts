import { Injectable } from '@angular/core';
import { CourseComponent } from './course/course.component';


export class CoursesService {

  constructor() { }
  getCourse(): CourseComponent[] {
    return  [
      new CourseComponent("IOT", 100),
      new CourseComponent("Fit For Scrum", 200),
      new CourseComponent("Java Core", 1000),
      new CourseComponent("Javascript: from novice to ninja", 500),
     ];
  }
}
