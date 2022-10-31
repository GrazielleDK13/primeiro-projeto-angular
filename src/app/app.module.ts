import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';


registerLocaleData(localePt,'pt');


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
    ReactiveFormsModule,HttpClientModule,AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' },  //para deichar a data em português
    {
        provide: DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
