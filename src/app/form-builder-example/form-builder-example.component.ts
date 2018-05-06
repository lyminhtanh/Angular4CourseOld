import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-builder-example',
  templateUrl: './form-builder-example.component.html',
  styleUrls: ['./form-builder-example.component.css']
})
export class FormBuilderExampleComponent {
  //instead of these lines
  // form = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   contact: new FormGroup({
  //     address: new FormControl(),
  //     email: new FormControl()
  //   }),
  //   topics: new FormArray([])
  // })
  form;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }
  submit(){
    
  }

 
}
