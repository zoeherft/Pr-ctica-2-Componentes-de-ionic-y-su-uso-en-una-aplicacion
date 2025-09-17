
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';

import { DataService } from '../../services/data';              // <- ruta REAL del servicio
import { Componente } from '../../interfaces/interfaces';       // <- interfaz

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit {
  componentes!: Observable<Componente[]>;

  constructor(
    private menuCtrl: MenuController,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.componentes = this.dataService.getMenuOpts();
  }

  mostrarMenu(): void {
    this.menuCtrl.open('first');
  }
}
