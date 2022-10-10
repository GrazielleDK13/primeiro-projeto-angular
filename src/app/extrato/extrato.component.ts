import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})

interface Transferencia {

  data: string;
  valor:string;
  destino: string;

}


export class ExtratoComponent implements OnInit {

  // @Input() vai servir para permitir a ser criada uma propriedade

  @Input()transferencias: Transferencia[] = [];  //DUVIDA



  constructor() { }

  ngOnInit(): void {

  }

}
