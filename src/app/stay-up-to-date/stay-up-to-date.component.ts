import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IconFacebookSvgComponent } from '../svg/icon-facebook-svg/icon-facebook-svg.component';
import { IconTwitterSvgComponent } from '../svg/icon-twitter-svg/icon-twitter-svg.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { interval, map, scan, startWith, takeUntil, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-stay-up-to-date',
  templateUrl: './stay-up-to-date.component.html',
  styleUrls: ['./stay-up-to-date.component.css'],
  standalone: true,
  imports: [IconFacebookSvgComponent, IconTwitterSvgComponent, ReactiveFormsModule, NgIf, CommonModule]
})
export class StayUpToDateComponent  {

  isError='input-info';

  counterDown$ = interval(1000).pipe(
    scan((acc) => acc + 1, 0),
    map((count) => 35_000 - (35_000 / 20 * count)),
    startWith(35_000),
    takeWhile(x => x >= 0)
  )

  constructor() { }


Form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
    },
    {
      updateOn: 'submit',
    }
  );

  onSubmit(): void {
    if (!this.Form.valid) {
      this.isError='input-info input-error'
      return;
    } else{
      console.log('Contact us');
    }
  }
}
