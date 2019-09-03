import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'task8';
  isLoading: boolean = false;


  submit(){
    this.isLoading = !this.isLoading;
    setTimeout( () => {
      this.isLoading = false;
      console.log(this.isLoading);
    }, 2000 );
  }



}
