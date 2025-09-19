import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false
})
export class SearchPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: string = '';

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getAlbumes().subscribe(albumes =>{

      this.albumes = albumes;
    });
  }

  onSearchChange(event: any) {
    //console.log(event);
    this.textoBuscar = event.detail.value;
  }

}

