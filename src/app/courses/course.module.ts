import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/star/star.module';

@NgModule({
  declarations:[
    CourseListComponent,
    CourseInfoComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    StarModule,
    RouterModule.forChild([
      {
        path:'courses',component:CourseListComponent
      },
      {
        path:'courses/info/:id', component:CourseInfoComponent
      }
    ])
  ]
})
export class CourseModule{

}
