import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { PsnelComponent } from './psnel/psnel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { Zippy1Component } from './zippy1/zippy1.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderExampleComponent } from './form-builder-example/form-builder-example.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PsnelComponent,
    InputFormatDirective,
    ZippyComponent,
    Zippy1Component,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    FormArrayComponent,
    FormBuilderExampleComponent,
    ChangePasswordFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
