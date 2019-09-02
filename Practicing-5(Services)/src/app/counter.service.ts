import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log("Active to Inactive"+this.activeToInactiveCounter);
  }
  
  icrementInactiveToActive(){
    this.inactiveToActiveCounter++;
    console.log("Inactive To Active"+this.inactiveToActiveCounter);
  }
  constructor() { }
}
