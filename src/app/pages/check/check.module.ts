import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckPage } from './check.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: CheckPage }]),
    ComponentsModule,
    CheckPage
  ]
})
export class CheckPageModule {}
