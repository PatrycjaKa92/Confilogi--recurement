import { CommonModule } from '@angular/common';
import { IconCloseSvgComponent } from './../svg/icon-close-svg/icon-close-svg.component';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LogoBookmarkSvgComponent } from '../svg/logo-bookmark-svg/logo-bookmark-svg.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-hamburger',
  templateUrl: './menu-hamburger.component.html',
  styleUrls: ['./menu-hamburger.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconCloseSvgComponent, CommonModule, LogoBookmarkSvgComponent, RouterLink]
})
export class MenuHamburgerComponent {

  constructor() { }

  hidden = new BehaviorSubject(true);

  menu() {
    this.hidden.next(!this.hidden);
  }

}
