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

    @Output() aoTranferir = new EventEmitter<any>();

    // o @Output() serve para criar um evento

    valor!: number;
    destino!: number;


  // metodo

  transferir(){

    console.log('Solicitada nova transferência');

    const valorEmitir = { valor : this.valor, destino:this.destino};
    this.aoTranferir.emit(valorEmitir);

    this.limparCampos();


    // console.log('valor: ', this.valor);
    // console.log('Destino: ', this.destino);

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
