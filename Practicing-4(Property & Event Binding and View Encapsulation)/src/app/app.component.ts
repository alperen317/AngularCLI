import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practicing';
  oddNumbers : number[] = [];
  evenNumbers : number[] = [];

  onGameNumber(sendNumber: number){
    if(sendNumber % 2 === 0){
      this.evenNumbers.push(sendNumber);
    }
    else{
      this.oddNumbers.push(sendNumber);
    }
 }
}
