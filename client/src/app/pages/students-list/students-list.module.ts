import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { StudentsListRoutingModule } from './students-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StudentsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    StudentsListComponent
  ]
})
export class StudentsListModule { }
