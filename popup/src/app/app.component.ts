import { Component } from '@angular/core';
import { DropdownModel } from './dropdown.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'popup';
  opened = false;

  items = [
    {
      id: 'istanbul',
      label: 'İstanbul'
    } as DropdownModel,
    {
      id: 'ankara',
      label: 'Ankara'
    } as DropdownModel,
    {
      id: 'edirne',
      label: 'Edirne'
    } as DropdownModel,
    {
      id: 'sinop',
      label: 'Sinop'
    } as DropdownModel
  ];

  selectedItem =
    {
      id: 'sinop',
      label: 'Sinop'
    } as DropdownModel;

  onOpened() {
    this.opened = !this.opened;

  }

  onEvent(flag: boolean) {
    this.opened = flag;
  }
}
