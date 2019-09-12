import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';

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


  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id != null ) {
      this.editMode = true;
      this.getUser(this.id);
    }
  }

  onSubmit() {
    if (this.editMode !== true){
      const newUser = new User(
        this.signupForm.value['id'],
        new Date().toLocaleString(),
        this.signupForm.value['name'],
        this.signupForm.value['avatar'],
        this.signupForm.value['email'],
        this.signupForm.value['tcNo']
        );
      this.dataService.addNewUser(newUser).subscribe( posts => {
        this.submitted = true;
        this.signupForm.reset();
      }, error => {
        console.log(error);
      });
    } else {
      this.editUser.name = this.signupForm.value['name'];
      this.editUser.email = this.signupForm.value['email'];
      this.editUser.avatar = this.signupForm.value['avatar'],
      this.editUser.identity = this.signupForm.value['tcNo'],
      this.editUser.id = this.signupForm.value['id'];
      this.editUser.createdAt = new Date().toLocaleString();

      this.dataService.editUser(this.editUser.id, this.editUser).subscribe ( user => {
        this.submitted = true;
        this.signupForm.reset();
      }, error => {
        console.log(error);
      });
    }
  }

  getUser(id) {
    this.dataService.getUser(id).subscribe( user => {
      this.editUser = user;
      if ( this.editUser.email.search("/@gmail.com/")){
       this.editUser.email = this.editUser.email.replace(/\s/g, "") + "@gmail.com";
      }
      this.signupForm.setValue({
        name: this.editUser.name,
        email : this.editUser.email,
        // tcNo : this.editUser.identity,
        tcNo : "89205626840",
        avatar : this.editUser.avatar,
        id : this.editUser.id
      });
    }, error => {
      console.log("Get user error" + error);
    });
  }
  deleteUser() {
    this.signupForm.reset();
    this.dataService.deleteUser(this.id).subscribe( response => {
      console.log("delete");
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
    });
  }
}
