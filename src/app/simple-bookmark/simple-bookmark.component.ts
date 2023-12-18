import { Component } from '@angular/core';
import { IllustrationHeroSvgComponent } from '../svg/illustration-hero-svg/illustration-hero-svg.component';

@Component({
  selector: 'app-simple-bookmark',
  templateUrl: './simple-bookmark.component.html',
  styleUrls: ['./simple-bookmark.component.css'],
  standalone: true,
  imports: [IllustrationHeroSvgComponent],
})
export class SimpleBookmarkComponent {}
