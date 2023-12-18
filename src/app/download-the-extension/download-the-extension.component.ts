import { Component } from '@angular/core';
import { LogoOperaSvgComponent } from '../svg/logo-opera-svg/logo-opera-svg.component';
import { LogoChromeSvgComponent } from '../svg/logo-chrome-svg/logo-chrome-svg.component';
import { LogoFirefoxSvgComponent } from '../svg/logo-firefox-svg/logo-firefox-svg.component';
import { BgDotsSvgComponent } from '../svg/bg-dots-svg/bg-dots-svg.component';

@Component({
  selector: 'app-download-the-extension',
  templateUrl: './download-the-extension.component.html',
  styleUrls: ['./download-the-extension.component.css'],
  standalone: true,
  imports: [LogoOperaSvgComponent, LogoChromeSvgComponent, LogoFirefoxSvgComponent, BgDotsSvgComponent]
})
export class DownloadTheExtensionComponent {}
