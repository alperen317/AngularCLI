import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/shared/data.service';
import { User } from './user/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'UsersApp';


  constructor() {}

  ngOnInit() { }

}
