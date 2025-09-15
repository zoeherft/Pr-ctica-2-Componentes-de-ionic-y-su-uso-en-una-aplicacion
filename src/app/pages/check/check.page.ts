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
    { name: 'Acorn Street',  selected: false },
    { name: 'Newbury Street', selected: true  },
    { name: 'South End',      selected: false },
    { name: 'North End',      selected: true  },
  ];

  onClick(item: any) { this.handleClick(item); }
  onclick(item: any) { this.handleClick(item); }

  private handleClick(item: any) {
    console.log('Click en:', item.name, '| Seleccionado:', item.selected);
  }
}
