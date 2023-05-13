import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoursesComponent } from './pages/list-courses/list-courses.component';

const routes: Routes = [
  {
    path: '', //el path en realidad es ./courses/''
    component: ListCoursesComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }