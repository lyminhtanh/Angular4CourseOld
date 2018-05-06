import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InputTextValidator } from '../common/input-text.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, InputTextValidator.canNotContainAnySpace], InputTextValidator.shouldBeUnique ),
    password: new FormControl('', Validators.required)
  })
  get username(){
    return this.form.get('username');
  }
  ngOnInit() {
  }
  login(){
    // let isValid = authServer.login(this.form.value);
    // if(!isValid){
    //   this.form.set
    // }
    this.form.setErrors({invalidLogin: true});
  }

}
