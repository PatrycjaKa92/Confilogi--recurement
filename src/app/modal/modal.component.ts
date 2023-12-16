import { ChangeDetectionStrategy, Component} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IconCloseSvgComponent } from '../svg/icon-close-svg/icon-close-svg.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IllustrationFeaturesTab2SvgComponent } from '../svg/illustration-features-tab-2-svg/illustration-features-tab-2-svg.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconCloseSvgComponent, AsyncPipe, IllustrationFeaturesTab2SvgComponent, CommonModule, RouterLink],
})
export class ModalComponent {

  constructor() { }

  hidden = new BehaviorSubject(true);

  modal() {
    this.hidden.next(!this.hidden);
    console.log('modal works');
  }

  close() {
    this.hidden.next(true);
  }

}
