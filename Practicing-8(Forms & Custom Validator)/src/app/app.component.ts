import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signupForm', {static: false}) signupForm: NgForm;

  submitted  = false;
  data = {
    ad: '',
    soyad: '',
    tcNo : '',
    email  : '',
  };

  onSubmit() {
    this.submitted = true;
    this.data.ad = this.signupForm.value.name;
    this.data.soyad = this.signupForm.value.lastname;
    this.data.tcNo = this.signupForm.value.tcNo;
    this.data.email = this.signupForm.value.email;
    console.log(this.data);
  }



}
