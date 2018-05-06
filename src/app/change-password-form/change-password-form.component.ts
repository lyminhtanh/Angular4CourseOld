import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      oldPw: ['', Validators.required, PasswordValidator.oldPwMismatching],
      newPw: ['', Validators.required],
      newPwConfirm: ['', Validators.required]
    }, {asyncValidator: PasswordValidator.newPwMismatching});
  }
  get oldPw(){
    return this.form.get('oldPw') as FormControl;
  }
  get newPw(){
    return this.form.get('newPw') as FormControl;
  }
  get newPwConfirm(){
    return this.form.get('newPwConfirm') as FormControl;
  }
 
  submit(){
    console.log('submitted')
  }

}
