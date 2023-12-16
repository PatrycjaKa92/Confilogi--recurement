import { Component, OnInit } from '@angular/core';
import { IllustrationFeaturesTab2SvgComponent } from '../svg/illustration-features-tab-2-svg/illustration-features-tab-2-svg.component';

@Component({
  selector: 'app-speedy-searching',
  templateUrl: './speedy-searching.component.html',
  styleUrls: ['./speedy-searching.component.css'],
  standalone: true,
  imports: [IllustrationFeaturesTab2SvgComponent],
})
export class SpeedySearchingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
