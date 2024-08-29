import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uiColorGen',
  standalone: true
})
export class UiColorGenPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
