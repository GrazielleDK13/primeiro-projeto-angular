import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})

export class NovaTransferenciaComponent implements OnInit {

  //atributos

    // public valor  = '';
    // public destino = '';

    @Output() aoTranferir = new EventEmitter<any>(); //DUVIDA

    // o @Output() serve para criar um evento ele e um decoraitor

    //valores do input

    valor!: number;
    destino!: number;


  // metodo

  transferir(){

    console.log('Solicitada nova transferência');

    const valorEmitir = { valor : this.valor, destino:this.destino};
    this.aoTranferir.emit(valorEmitir);

    this.limparCampos();


    // console.log('valor: ', this.valor);   isso e para aparecer os valore no console
    // console.log('Destino: ', this.destino); isso e para aparecer os valore no console

  }

  limparCampos(){

    this.valor = 0 ;
    this.destino = 0 ;

  }

  constructor() {

  }



  ngOnInit(): void {


  }


}
