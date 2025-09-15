import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarPage } from './avatar.page';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: AvatarPage }]),
    AvatarPage
  ]
})
export class AvatarPageModule {}
