import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent implements OnInit {
  nombreUpper: string = 'SEBASTIÁN';
  nombreLower: string = 'sebastián';
  nombreCompleto: string = 'sEbAsTiÁn bArCiA';

  fecha: Date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
