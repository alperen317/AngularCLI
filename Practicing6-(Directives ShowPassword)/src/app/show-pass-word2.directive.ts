import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';


@Directive({
  selector: '[appShowPassWord2]'
})
export class ShowPassWord2Directive  {

  constructor(private el:ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mounseover(eventData: Event){
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'text');
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    this.renderer.setAttribute(this.el.nativeElement, 'type', 'password');
  }
  
}
