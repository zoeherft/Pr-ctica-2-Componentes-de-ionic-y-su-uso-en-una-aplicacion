import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data';// <- ruta real data.service.ts

import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false // <- agrege esto por que en app.module.ts me generaba un error en declarations: [AppComponent]
})
export class AppComponent {
  componentes!: Observable<Componente[]>;

  constructor(
    private platform: Platform,
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Ocultar splash y cambiar status bar
      StatusBar.setStyle({ style: Style.Default });
      SplashScreen.hide();
      this.componentes = this.dataService.getMenuOpts();
    });
  }
}
