import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/pages/admin-layout/admin-layout.component';
import { AllProjectsComponent } from './modules/projects/pages/all-projects/all-projects.component';
import { NewProjectComponent } from './modules/projects/pages/new-project/new-project.component';
import { BooksComponent } from './modules/books/pages/books/books.component';

const routes: Routes = [
  {path:'', component:AdminLayoutComponent,
  children:[
    {path:'all-projects',component:AllProjectsComponent},
    {path:'new-project',component:NewProjectComponent},
    {path:'books',component:BooksComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
