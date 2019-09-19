import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { DropdownModel } from './dropdown.model';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChildComponent),
      multi: true
    }
  ]
})
export class ChildComponent implements OnInit, ControlValueAccessor {
 
  value: DropdownModel;

  constructor() { }

  ngOnInit() {
  }

  writeValue(value: DropdownModel): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    
  }
  registerOnTouched(fn: any): void {
    
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }

}
