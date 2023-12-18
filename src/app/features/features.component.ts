import { Component } from '@angular/core';
import { BookmarkInOneClickComponent } from '../bookmark-in-one-click/bookmark-in-one-click.component';
import { SpeedySearchingComponent } from '../speedy-searching/speedy-searching.component';
import { EasyScharingComponent } from '../easy-scharing/easy-scharing.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
  standalone: true,
  imports: [BookmarkInOneClickComponent, SpeedySearchingComponent, EasyScharingComponent, NgIf]
})
export class FeaturesComponent {

  choice='simple bookmarks';

  desktop1='none-desktop';
  desktop2='';
  desktop3='';

  simpleBookmarks() {
    this.choice='simple bookmarks';
    this.desktop1= 'none-desktop';
    this.desktop2='';
    this.desktop3='';
  }

  speedySearching() {
    this.choice='speedy searching';
    this.desktop1= '';
    this.desktop2='none-desktop';
    this.desktop3='';
  }

  easyScharing() {
    this.choice='easy scharing';
    this.desktop1= '';
    this.desktop2='';
    this.desktop3='none-desktop';
  }
}
