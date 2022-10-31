import { routes } from './../app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Transferencia from '../extrato/interfaces/Tranferencia';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css'],
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

  constructor(private service: TransferenciaService, private router:Router ) {}

  ngOnInit(): void {

  }

  // metodo

  transferir() {

    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
         this.limparCampos();
         this.router.navigateByUrl('extrato');

      },
      (error) => console.error('error')
      );

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }







}



