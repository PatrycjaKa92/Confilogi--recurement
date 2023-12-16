import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoBookmarkSvgComponent } from './svg/logo-bookmark-svg/logo-bookmark-svg.component';
import { IconHamburgerSvgComponent } from './svg/icon-hamburger-svg/icon-hamburger-svg.component';
import { SimpleBookmarkComponent } from './simple-bookmark/simple-bookmark.component';
import { FeaturesComponent } from './features/features.component';
import { BookmarkInOneClickComponent } from './bookmark-in-one-click/bookmark-in-one-click.component';
import { DownloadTheExtensionComponent } from './download-the-extension/download-the-extension.component';
import { FrequentlyAskedQuestionComponent } from './frequently-asked-question/frequently-asked-question.component';
import { StayUpToDateComponent } from './stay-up-to-date/stay-up-to-date.component';
import { IconFacebookSvgComponent } from './svg/icon-facebook-svg/icon-facebook-svg.component';
import { IconTwitterSvgComponent } from './svg/icon-twitter-svg/icon-twitter-svg.component';
import { MenuHamburgerComponent } from './menu-hamburger/menu-hamburger.component';
import { AsyncPipe } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogoBookmarkSvgComponent,
    IconHamburgerSvgComponent,
    SimpleBookmarkComponent,
    FeaturesComponent,
    BookmarkInOneClickComponent,
    DownloadTheExtensionComponent,
    FrequentlyAskedQuestionComponent,
    StayUpToDateComponent,
    IconFacebookSvgComponent,
    IconTwitterSvgComponent,
    MenuHamburgerComponent,
    AsyncPipe,
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
