import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {

  title = 'recuirementTask-Confilogi';

  @ViewChild('modal') Modal!: ModalComponent;

  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.Modal.modal();
      console.log(this.Modal);
  }, 30000);
  }

}
