import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  myValue: string;

  ngOnInit( ){
    console.log(
      document.getElementById('mainInput'));
  }

  someMethod(): void {
    console.log("blur");
    console.log(
      document.getElementById('mainInput'));
  }
  somMethod2(): void {
    console.log("focus");
    console.log(
      document.getElementById('mainInput'));
  }
}
