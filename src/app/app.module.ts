import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { BooksModule } from './modules/books/books.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    ProjectsModule,
    CoreModule,
    BooksModule,
    DragDropModule,
    FormsModule,
    TagInputModule
  ],
  exports:[
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
