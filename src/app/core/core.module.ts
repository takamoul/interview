import { NgModule } from "@angular/core";
import { BooksService } from "./_services/books/books.service";
import { ProjectsService } from "./_services/projects/projects.service";

@NgModule({
  providers: [
    ProjectsService,
    BooksService
  ]
})
export class CoreModule { }
