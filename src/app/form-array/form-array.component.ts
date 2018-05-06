import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent{
  form = new FormGroup({topics: new FormArray([])});
  
  addItem(topic: HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }
  removeItem(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
  get topics(): FormArray{
    return this.form.get('topics') as FormArray;
  }
}
