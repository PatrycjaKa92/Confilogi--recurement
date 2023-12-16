import { Component, OnInit } from '@angular/core';
import { IllustrationFeaturesTab3SvgComponent } from '../svg/illustration-features-tab-3-svg/illustration-features-tab-3-svg.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-easy-scharing',
  templateUrl: './easy-scharing.component.html',
  styleUrls: ['./easy-scharing.component.css'],
  standalone: true,
  imports: [IllustrationFeaturesTab3SvgComponent, CommonModule]
})
export class EasyScharingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
