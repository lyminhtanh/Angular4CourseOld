import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy1',
  templateUrl: './zippy1.component.html',
  styleUrls: ['./zippy1.component.css']
})
export class Zippy1Component implements OnInit {
  isSelected: boolean = false;
  @Input('title') title:string;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected = !this.isSelected;
  }
}
