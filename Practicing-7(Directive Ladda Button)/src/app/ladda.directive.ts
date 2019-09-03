import { Directive, Input, ElementRef, OnInit, OnChanges } from '@angular/core';
import * as Ladda from 'ladda';

@Directive({
  selector: '[appLadda]'
})
export class LaddaDirective  implements OnChanges, OnInit {
  @Input('appLadda') isLoading: boolean;
  constructor(private el: ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.className += 'ladda-button';
    this.el.nativeElement.setAttribute('data-style', 'contract');
    this.el.nativeElement.setAttribute('data-color', 'blue');
    this.el.nativeElement.setAttribute('data-spinner-color', '#7FFFD4');
  }

  ngOnChanges() {
    console.log('directive', this.isLoading);
    if (this.isLoading === true) {
      const l = Ladda.create(this.el.nativeElement);
      l.start();
      setTimeout( () => {
        l.stop();
      }, 2000);
    }
  }

}
