import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: false
})
export class ToastPage {

  constructor(private toastCtrl: ToastController) { }

  // Toast simple
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'hey :)',
      duration: 2000
    });
    await toast.present();
  }

  // Toast con opciones
  async presentToastWithOptions() {
    const toast = await this.toastCtrl.create({
      header: 'Toast header',
      message: 'hey :)',
      position: 'top',
      buttons: [
        {
          side: 'start',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();
  }
}
