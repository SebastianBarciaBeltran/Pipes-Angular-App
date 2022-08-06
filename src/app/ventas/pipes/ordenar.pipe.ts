import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroes[], ordenarPor: string = 'sin valor'): Heroes[] {
    switch (ordenarPor) {
      case 'nombre':
        heroes = heroes.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
        break;
      case 'vuela':
        heroes = heroes.sort((a, b) => (a.vuela > b.vuela ? -1 : 1));
        break;
      case 'color':
        heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
        break;

      default:
        return heroes;
    }

    return heroes;
  }
}
