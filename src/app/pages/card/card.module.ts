import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CardPageRoutingModule } from './card-routing.module';
import { CardPage } from './card.page'; // <-- standalone

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardPageRoutingModule,
    CardPage              // <-- importa el componente standalone
  ],
  // NO declarations cuando el componente es standalone
})
export class CardPageModule {}
