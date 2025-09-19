import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: false
})
export class SegmentPage implements OnInit {

  superHeroes!: Observable<any>;

  constructor( private DataService: DataService ) { }

  ngOnInit() {
    this.superHeroes = this.DataService.getHeroes();
  }

  segmentChanged(event: any) {
    console.log(event.detail.value);
  }

}
