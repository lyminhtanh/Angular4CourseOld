import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { CourseComponent } from './course/course.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post = {
    name : this.title,
    isFavorite: true

  }
  viewMode = 'map';
  courses: CourseComponent[];
  constructor(service: CoursesService){
    this.courses = service.getCourse();
  }
  onFavoriteChanged(event: {newValue: boolean}){
    console.log("changed: ", event);
  }
}
