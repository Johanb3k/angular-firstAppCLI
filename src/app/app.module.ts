import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GreetingPipe } from './greeting.pipe';
import { MaleOnlyPipe } from './pipes-filtres/pipe-filtre';

import { PipesFiltresComponent } from './pipes-filtres/pipes-filtres.component';
import { InputsComponent } from './inputs/inputs.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ListElementComponent } from './to-do-list/list-element/list-element.component';
import { ListeCoursesComponent } from './liste-courses/liste-courses.component';
import { ArticleComponent } from './liste-courses/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingPipe,
    PipesFiltresComponent,
    MaleOnlyPipe,
    InputsComponent,
    ToDoListComponent,
    ListElementComponent,
    ListeCoursesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
