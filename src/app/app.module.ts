import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormularComponent } from './formular/formular.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FormularComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
