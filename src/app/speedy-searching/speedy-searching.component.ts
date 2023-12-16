import { Component, OnInit } from '@angular/core';
import { IllustrationFeaturesTab2SvgComponent } from '../svg/illustration-features-tab-2-svg/illustration-features-tab-2-svg.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-speedy-searching',
  templateUrl: './speedy-searching.component.html',
  styleUrls: ['./speedy-searching.component.css'],
  standalone: true,
  imports: [IllustrationFeaturesTab2SvgComponent, CommonModule]
})
export class SpeedySearchingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
