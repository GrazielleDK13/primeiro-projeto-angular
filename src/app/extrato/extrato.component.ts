import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';
import Transferencia from './interfaces/Tranferencia';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})

export class ExtratoComponent implements OnInit {

  transferencias: Transferencia[] = [];

  constructor(private service: TransferenciaService) {}

  ngOnInit() {
    this.service.todas().subscribe((transferencias: Transferencia[] ) =>{
      console.table(transferencias);
      this.transferencias = transferencias;

    })
  }
}
