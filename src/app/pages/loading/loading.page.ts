import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: false
})
export class LoadingPage implements OnInit {

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async mostrarLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 3000,
    });

    await loading.present();
  }

}
