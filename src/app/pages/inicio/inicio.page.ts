import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit {

  components: Componente[] = [
    {
      icon: "american-football-outline",
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: "alert-circle-outline",
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: "beaker-outline",
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: "radio-button-off-outline",
      name: 'Buttons',
      redirectTo: '/button'
    },
    {
      icon: "card-outline",
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: "checkmark-circle-outline",
      name: 'Checks',
      redirectTo: '/check'
    },
    {
      icon: "calendar-outline",
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: "car-outline",
      name: 'Fab',
      redirectTo: '/fab'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
