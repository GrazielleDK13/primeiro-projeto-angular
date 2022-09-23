import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';


@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,  //importado o modulo de formulario
    ReactiveFormsModule,       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
