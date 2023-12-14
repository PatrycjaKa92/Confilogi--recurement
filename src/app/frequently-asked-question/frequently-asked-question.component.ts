import { Component, OnInit } from '@angular/core';
import { IconArrowSvgComponent } from '../svg/icon-arrow-svg/icon-arrow-svg.component';

@Component({
  selector: 'app-frequently-asked-question',
  templateUrl: './frequently-asked-question.component.html',
  styleUrls: ['./frequently-asked-question.component.css'],
  standalone: true,
  imports: [IconArrowSvgComponent]
})
export class FrequentlyAskedQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
