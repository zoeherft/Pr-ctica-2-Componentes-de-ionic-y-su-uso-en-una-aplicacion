import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();


@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  standalone: false
})
export class SlidesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
