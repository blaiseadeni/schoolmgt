import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsEditComponent } from './students-edit.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsEditRoutingModule { }
