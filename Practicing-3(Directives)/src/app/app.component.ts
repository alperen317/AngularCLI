import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecret = false;
  title = 'Practicing-3';
  log = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length +1 );
    this.log.push(new Date());
  }
}
