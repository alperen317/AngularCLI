import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signupForm', {static: false}) sgnForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  submitted  = false;
  data = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    this.data.email = this.sgnForm.value.email;
    this.data.subscription = this.sgnForm.value.subscription;
    this.data.password = this.sgnForm.value.password;


    this.sgnForm.reset();
  }
}
