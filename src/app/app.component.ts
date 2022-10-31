import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'appangular';



  constructor(private service: TransferenciaService){}


  // <~~ FORMA SIMPLES MENOS VERBOSA transferir ~~>

  // this.transferencia = $event;

  //FORMA ROBUSTA E VERBOSA

  // this.destino = $event.destino;
  // this.valor = $event.valor;

}
