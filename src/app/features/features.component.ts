import { Component, OnInit } from '@angular/core';
import { BookmarkInOneClickComponent } from '../bookmark-in-one-click/bookmark-in-one-click.component';
import { NgIf } from '@angular/common';
import { SpeedySearchingComponent } from '../speedy-searching/speedy-searching.component';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  standalone: true,
  imports: [BookmarkInOneClickComponent, NgIf, SpeedySearchingComponent]
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  choice='simple bookmarks';

  simpleBookmarks() {
  this.choice='simple bookmarks';
  }

  speedySearching() {
    this.choice='speedy searching';
  }

  easyScharing() {
    this.choice='easy scharing';
  }

}
