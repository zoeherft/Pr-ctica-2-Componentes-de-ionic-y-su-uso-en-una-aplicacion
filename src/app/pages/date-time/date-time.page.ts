import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: false
})
export class DateTimePage {

  @ViewChild('customModal') customModal!: IonModal;

  fechaNacimiento: string = '2020-09-08';
  fechaRestringida: string = new Date().toISOString();
  minDate: string = new Date().toISOString();
  maxDate: string = new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toISOString();
  soloAnno: string = '2015';
  customDate: string = new Date().toISOString();


  constructor() { }

  handleHola() {
    console.log('Botón HOLA presionado');
    console.log('La fecha seleccionada es:', this.customDate);
    this.customModal.dismiss();
  }

  handleMundo() {
    console.log('Botón MUNDO presionado');
    console.log('La fecha seleccionada es:', this.customDate);
    this.customModal.dismiss(this.customDate);
  }
}
