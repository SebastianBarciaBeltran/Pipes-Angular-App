import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let color = '';

    switch (value) {
      case 0:
        color = 'rojo';
        break;
      case 1:
        color = 'negro';
        break;
      case 2:
        color = 'azul';
        break;
      case 3:
        color = 'verde';
        break;

      default:
        break;
    }

    return color;
  }
}
