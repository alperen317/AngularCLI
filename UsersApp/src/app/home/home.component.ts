import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';
import { User } from '../user/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {

  data: User[];
  subscription: Subscription;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscription = this.dataService.fetchUsers().subscribe(
      (data: User[]) => {
        this.data = data;
      }
    );
  }

  // userEdit(id: string) {
  //   this.router.navigate(['/user', id]);
  // }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
