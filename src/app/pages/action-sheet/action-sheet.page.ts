import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: false
})
export class ActionSheetPage implements OnInit {

  // 👇 camelCase que SÍ coincide con el uso abajo
  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit(): void {}

  onClick(): void {
    this.presentActionSheet();
  }

  async presentActionSheet(): Promise<void> {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'rojo',
          handler: () => console.log('Delete clicked')
        },
        {
          text: 'Share',
          icon: 'share-outline',
          handler: () => console.log('Share clicked')
        },
        {
          text: 'Play (open modal)',
          icon: 'caret-forward-circle-outline',
          handler: () => console.log('Play clicked')
        },
        {
          text: 'Favorite',
          icon: 'heart-outline',
          handler: () => console.log('Favorite clicked')
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => console.log('Cancel clicked')
        }
      ]
    });
    await actionSheet.present();
  }
}
