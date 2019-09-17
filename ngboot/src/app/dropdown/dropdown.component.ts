import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownModel } from './dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
@Input() dropArray: DropdownModel[];
@Output() selected: EventEmitter<DropdownModel> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect( item: DropdownModel ) {
    this.selected.emit(item);
  }

}
