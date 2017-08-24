import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GreetingPipe } from './greeting.pipe';
import { MaleOnlyPipe } from './pipes-filtres/pipe-filtre';

import { PipesFiltresComponent } from './pipes-filtres/pipes-filtres.component';
import { InputsComponent } from './inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingPipe,
    PipesFiltresComponent,
    MaleOnlyPipe,
    InputsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
