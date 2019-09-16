import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
@Input() title: string;
@Input() opened: boolean;
@Output() event: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }
  closeOn() {
    this.opened = false;
    this.event.emit(this.opened);
  }

}
