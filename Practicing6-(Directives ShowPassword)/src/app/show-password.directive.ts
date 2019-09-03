import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowPassword]'
})
export class ShowPasswordDirective implements OnInit {

  private show = false;
  constructor(private el: ElementRef) { }
  ngOnInit() {
    const parent = this.el.nativeElement.parentNode;
    const button = document.createElement('button');
    button.innerHTML = 'Show Password';
    button.className += "ml-2 btn btn-primary";
    button.addEventListener('click', (event)=>{
      this.showOn(button);
    });
    parent.appendChild(button);
  }

  showOn(button: HTMLElement){
    
    this.show = !this.show;
    if(this.show){
      this.el.nativeElement.setAttribute('type', 'text');
      button.innerHTML = 'Hide password';
    }else {
      this.el.nativeElement.setAttribute('type', 'password');
      button.innerHTML = 'Show password';
    }
  }

}
