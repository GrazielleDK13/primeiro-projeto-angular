import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appangular';

  // <~~ FORMA SIMPLES MENOS VERBOSA ~~>

  transferencias: any [] = [];

  //FORMA ROBUSTA E VERBOSA

  // destino!: number;
  // valor!: number;

  transferir($event: any) {

    console.log($event);

    const tranferencia = {...$event , data: new Date()};

    this.transferencias.push(tranferencia);

    // <~~ FORMA SIMPLES MENOS VERBOSA ~~>

    // this.transferencia = $event;

    //FORMA ROBUSTA E VERBOSA

    // this.destino = $event.destino;
    // this.valor = $event.valor;

  }
  
}
