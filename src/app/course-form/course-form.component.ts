import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  categories = [{id: 1, name : "Math"},
                {id: 2, name : "Geography"}];
                hasGuarantee: boolean;

  constructor() { }
  ngOnInit() {
  }

  onSubmit(f: FormGroup){
    console.log(f.value);
    console.log("hasGuarantee "+this.hasGuarantee);

  }
}
