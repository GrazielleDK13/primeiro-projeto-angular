import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css']
})
export class NovaTransferenciaComponent implements OnInit {

  transferir(){
    console.log('Solicitada nova transferência');

  }

  constructor() { }

  ngOnInit(): void {
  }

}
