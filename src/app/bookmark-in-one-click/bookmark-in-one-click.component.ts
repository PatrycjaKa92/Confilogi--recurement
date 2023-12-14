import { Component, OnInit } from '@angular/core';
import { IllustrationHeroSvgComponent } from '../svg/illustration-hero-svg/illustration-hero-svg.component';

@Component({
  selector: 'app-bookmark-in-one-click',
  templateUrl: './bookmark-in-one-click.component.html',
  styleUrls: ['./bookmark-in-one-click.component.css'],
  standalone: true,
  imports: [IllustrationHeroSvgComponent]
})
export class BookmarkInOneClickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
