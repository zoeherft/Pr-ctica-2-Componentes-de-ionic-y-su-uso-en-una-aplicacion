import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: false
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[] = [],
    texto: string = '',
    columna: string = 'title'
    ): any[] {

    if (!arreglo || arreglo.length === 0) {
      return [];
    }

    if (texto === '') {
      return arreglo;
    }

    texto = texto.toLocaleLowerCase();

    return arreglo.filter(
      (item: any) => item[columna]?.toLowerCase().includes(texto)
    );
  }

}
