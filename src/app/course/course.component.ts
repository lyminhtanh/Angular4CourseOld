import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private _name: string, private _fee: number) { }

  ngOnInit() {
  }
  
  get name(){
    return this._name;
  }
  get fee(){
    return this._fee;
  }

}
