import { Component, ViewChild } from '@angular/core';
import { User } from './user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild ('f', {static: false}) form: NgForm;
  title = 'Form';
  model = new User;
  onSubmit() {
    
    console.log(this.form);
    console.log('SUCCESS!! :-)\n\n' + this.model.firstName);
  }
}
