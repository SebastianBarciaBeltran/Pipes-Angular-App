import { Component, OnInit } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent implements OnInit {
  nombre: string = 'sebastian';
  ordenarPor: string = 'nombre';
  heroes: Heroes[] = [
    { nombre: 'Superman', vuela: true, color: Color.azul },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.rojo },
    { nombre: 'Daredevil', vuela: false, color: Color.rojo },
    { nombre: 'Linterna Verde', vuela: true, color: Color.verde },
  ];
  constructor() {}

  ngOnInit(): void {}

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
}
