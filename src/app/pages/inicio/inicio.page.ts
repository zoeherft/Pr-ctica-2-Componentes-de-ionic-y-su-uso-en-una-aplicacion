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
      icon: "american-football",
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: "logo-amazon",
      name: 'Alert',
      redirectTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
