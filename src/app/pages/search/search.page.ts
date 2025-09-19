import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import { SearchbarChangeEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false
})
export class SearchPage implements OnInit {
onSearchChange($event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) {
throw new Error('Method not implemented.');
}

  albumes: any[] = [];

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.DataService.getAlbumes().subscribe( albumes=> {
      console.log(albumes);
      this.albumes = albumes;
  }

  )};

}
