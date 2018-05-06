import { Component, OnInit } from '@angular/core';
import { CourseComponent } from '../course/course.component';
import { CoursesService } from '../courses.service';
//@Component already includes @Injectable() 
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "List of courses";
  colSpan = "2";
  isActive: boolean = false;
  email: string = "tanhleevn@gmail.com";
  numberPipe: number = 45.345;
  //courses: string[] = ['course 1', 'course 2', 'course 3']; 
  courses: CourseComponent[];
  selectedCourse: CourseComponent;
  btnValue: string = "Click me";
  constructor(service: CoursesService) {  // injection better for unit test
    this.courses = service.getCourse();
  }

  ngOnInit() {
  }
  onClick(course: CourseComponent): void{
    this.selectedCourse = course;
  }
  onBtnClicked() { 
    this.isActive = !this.isActive
;
  }
  onTabPressed($event){
    this.btnValue = $event.target.value;
  }
}
