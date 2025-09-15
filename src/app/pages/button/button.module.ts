import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonPage } from './button.page';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: ButtonPage }]),
    ButtonPage
  ]
})
export class ButtonPageModule {}
