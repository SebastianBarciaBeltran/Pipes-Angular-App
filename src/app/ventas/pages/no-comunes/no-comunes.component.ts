import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  //i18nSelect
  nombre: string = 'sebastian';
  genero: string = 'masculino';
  invitacionMapping = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = [
    'Maria',
    'Pedro',
    'Juan',
    'Hernando',
    'Eduardo',
    'Fernando',
  ];
  clientesMapping = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    other: 'tenemos # clientes esperando',
  };
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarPersona() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  borrarCliente() {
    if (this.clientes.length === 0) {
      return;
    }

    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Sebastián',
    edad: 25,
    direccion: 'Málaga, España.',
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
  ];

  // Aysnc Pipe
  miObservable = interval(1000);

  valorPormesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500);
  });
}
