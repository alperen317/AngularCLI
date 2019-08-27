import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() sendNumber = new EventEmitter<number>();
  interval;
  counter: number = 0;
  constructor() { }

  ngOnInit() {
  }
  gameStart(){
    this.interval = setInterval(()=> {
      this.counter++;
      this.sendNumber.emit(this.counter);
    },1000);
  }
  gamePause(){
    clearInterval(this.interval);
  }

}
