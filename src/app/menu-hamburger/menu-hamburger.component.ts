import { CommonModule } from '@angular/common';
import { IconCloseSvgComponent } from './../svg/icon-close-svg/icon-close-svg.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LogoBookmarkSvgComponent } from '../svg/logo-bookmark-svg/logo-bookmark-svg.component';
import { RouterLink } from '@angular/router';
import { IconFacebookSvgComponent } from '../svg/icon-facebook-svg/icon-facebook-svg.component';
import { IconTwitterSvgComponent } from '../svg/icon-twitter-svg/icon-twitter-svg.component';

@Component({
  selector: 'app-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconCloseSvgComponent, CommonModule, LogoBookmarkSvgComponent, RouterLink, IconFacebookSvgComponent, IconTwitterSvgComponent]
})
export class MenuHamburgerComponent {

  constructor() { }

  hidden = new BehaviorSubject(true);

  menu() {
    this.hidden.next(!this.hidden);
  }

  close() {
    this.hidden.next(true);
  }

}
