import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
  standalone: false
})
export class PopoverInfoComponent  implements OnInit {
  [x: string]: any;//se tuvo que agregar para que no diera error

  items= Array(11);

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number){
    this.popoverCtrl.dismiss({
      item: valor
    });
  }

}
