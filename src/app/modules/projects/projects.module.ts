

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NewProjectComponent } from "./pages/new-project/new-project.component";
import { AllProjectsComponent } from "./pages/all-projects/all-projects.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    NewProjectComponent,
    AllProjectsComponent
  ],
  exports: [
    CommonModule,
    BrowserModule ,
    RouterModule
  ],
  imports: [
    RouterModule
  ],
  providers: [

  ]
})
export class ProjectsModule { }
