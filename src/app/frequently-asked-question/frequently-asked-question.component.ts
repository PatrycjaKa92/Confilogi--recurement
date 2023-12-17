import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IconArrowSvgComponent } from '../svg/icon-arrow-svg/icon-arrow-svg.component';
import { BehaviorSubject, tap } from 'rxjs';
import { AsyncPipe, NgClass } from '@angular/common';
import { QuestionDirective } from './question.directive';

@Component({
  selector: 'app-frequently-asked-question',
  templateUrl: './frequently-asked-question.component.html',
  styleUrls: ['./frequently-asked-question.component.css'],
  standalone: true,
  imports: [IconArrowSvgComponent, QuestionDirective]
})
export class FrequentlyAskedQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
