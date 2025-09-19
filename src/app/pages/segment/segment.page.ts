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

  superHeroes!: Observable<any[]>;
  // '' => muestra todos
  publisher: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event: CustomEvent): void {
    const val = (event.detail as any).value;
    this.publisher = (val === 'todos') ? '' : val;
  }
}
