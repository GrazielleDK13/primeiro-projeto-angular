import { Component, Input, OnInit } from '@angular/core';
import Transferencia from './interfaces/Tranferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})


export class ExtratoComponent implements OnInit {

  // @Input() para receber valores em um componente

  @Input()transferencias: Transferencia [] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
