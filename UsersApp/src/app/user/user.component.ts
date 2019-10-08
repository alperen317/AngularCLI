import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataMockapiService } from '../shared/data-mockapi.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild ('signupForm', {static: false}) signupForm: NgForm;
  submitted = false;
  editMode = false;
  editUser: User;
  id: string;
  title = 'Kayıt Formu';
  title2 = 'Kayıt Düzenleme';
  newUser: User;


  constructor(private dataService: DataService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.id = this.route.snapshot.params[ 'id' ];
    this.activeRoute.params.subscribe((params) => this.id = params.id);
    if (this.id != null ) {
      this.editMode = true;
      this.getUser(this.id);
    }
  }
  onSubmit() {
    if (this.editMode !== true) {
      // New user
      const newUser = new User(
        this.signupForm.value.id,
        new Date().toLocaleString(),
        this.signupForm.value.name,
        this.signupForm.value.avatar,
        this.signupForm.value.email,
        this.signupForm.value.tcNo
        );
      this.dataService.addNewUser(newUser).subscribe( posts => {
        console.log('save new user');
        this.submitted = true;
        this.router.navigate(['/']);
        this.signupForm.reset();
      }, error => {
        console.log(error);
      });
    } else {
      console.log('else');
      this.editUser.name = this.signupForm.value.name;
      this.editUser.email = this.signupForm.value.email;
      this.editUser.avatar = this.signupForm.value.avatar,
      this.editUser.identity = this.signupForm.value.tcNo,
      this.editUser.id = this.signupForm.value.id;
      this.editUser.createdAt = new Date().toLocaleString();
      this.saveUser(this.editUser);
      // this.dataService.editUser(this.editUser.id, this.editUser).subscribe ( user => {
      //   this.submitted = true;
      //   console.log(user);
      //   this.router.navigate(['/']);
      //   this.signupForm.reset();
      // }, error => {
      //   console.log(error);
      // });
    }
  }

  saveUser(user: User) {
    this.dataService.editUser(user.id, user).subscribe( user => {
      this.submitted = true;
      console.log(user);
      this.router.navigate(['/']);
      this.signupForm.reset();
    }, error => {
      console.log(error);
    });
  }

  getUser(id) {
    this.dataService.getUser(id).subscribe( user => {
      this.editUser = user;
      //this.editUser.email = 'testemail5@gmail.com';
      (document.getElementById('name') as HTMLInputElement).value = this.editUser.name;
      (document.getElementById('email') as HTMLInputElement).value = this.editUser.email;
      (document.getElementById('avatar') as HTMLInputElement).value = this.editUser.avatar;
      //(document.getElementById('img') as HTMLImageElement).src = this.editUser.avatar;
      (document.getElementById('id') as HTMLInputElement).value =  this.editUser.id;
      (document.getElementById('tcNo') as HTMLInputElement).value =  '89205626840';
      // this.signupForm.setValue({
      //   name : this.editUser.name,
      //   email : this.editUser.email,
      //   // tcNo : this.editUser.identity,
      //   tcNo : '89205626840',
      //   avatar : this.editUser.avatar,
      //   id : this.editUser.id
      // });

    }, error => {
      console.log('Get user error' + error);
    });
  }
  deleteUser() {
    //this.signupForm.reset();
    this.dataService.deleteUser(this.id).subscribe( response => {
      console.log('delete');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }
}
