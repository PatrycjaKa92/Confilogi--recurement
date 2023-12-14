import { Component, OnInit } from '@angular/core';
import { IconFacebookSvgComponent } from '../svg/icon-facebook-svg/icon-facebook-svg.component';
import { IconTwitterSvgComponent } from '../svg/icon-twitter-svg/icon-twitter-svg.component';

@Component({
  selector: 'app-stay-up-to-date',
  templateUrl: './stay-up-to-date.component.html',
  styleUrls: ['./stay-up-to-date.component.css'],
  standalone: true,
  imports: [IconFacebookSvgComponent, IconTwitterSvgComponent]
})
export class StayUpToDateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
