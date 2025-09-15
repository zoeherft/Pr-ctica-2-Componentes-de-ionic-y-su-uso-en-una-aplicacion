import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ComponentsModule]
})
export class CheckPage {
  data = [
    { name: 'Acorn Street', color:'primary', selected: false },
    { name: 'Newbury Street',color:'secondary', selected: false  },
    { name: 'South End', color:'tertiary', selected: false },
    { name: 'North End', color:'success', selected: false  },
  ];

  onClick(item: any) {
    console.log(item);
   }
  onclick(item: any) {
    console.log(item);
  }

  private handleClick(item: any) {
    console.log('Click en:', item.name, '| Seleccionado:', item.selected);
  }

  verData(){
    console.log(this.data);
  }
}
