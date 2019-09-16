import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'popup';
  opened = false;

  onOpened() {
    this.opened =  !this.opened;
 
  }
}
