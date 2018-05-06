import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactMethods = [{id: 1, name: "Phone"}, {id: 2, name:"email"}];
  constructor() { }
  onChange(templateVar){
    console.log(templateVar.valid);
  }

}
