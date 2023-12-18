import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appQuestion]',
  standalone: true,
})
export class QuestionDirective {
  @HostBinding('class')
    elementClass = 'custom-theme';
  @HostListener('click') onClick() {
    if (this.elementClass === 'question-clicked') {
      this.elementClass = '';
    } else {
      this.elementClass = 'question-clicked';
    }
  }
}

