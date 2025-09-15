import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: false
})
export class DateTimePage {

  // CAMBIO AQUÍ: Le damos el valor inicial "08 September 2020"
  fechaNacimiento: string = '2020-09-08';

  // Lo dejamos con la fecha actual como valor inicial
  fechaRestringida: string = new Date().toISOString();
  minDate: string = new Date().toISOString();
  maxDate: string = new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString();

  // CAMBIO AQUÍ: Le damos el valor inicial "2015"
  soloAnno: string = '2015';

  constructor() { }
}
