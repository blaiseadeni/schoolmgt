import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsEditComponent } from './students-edit.component';
import { StudentsEditRoutingModule } from './students-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StudentsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    StudentsEditComponent
  ]
})
export class StudentsEditModule { }
