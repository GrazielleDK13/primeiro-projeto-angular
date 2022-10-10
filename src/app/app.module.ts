import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';


@NgModule({

  //  Declaração de component

  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,  // Importado o modulo de formulario
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
