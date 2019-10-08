import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { TcControlDirective } from './tcControl.directive';
import { DataMockapiService } from '../shared/data-mockapi.service';
import { DataService } from '../shared/data.service';
import { DataMockService } from '../shared/data-mock.service';



@NgModule({
  declarations: [
    UserComponent,
    TcControlDirective
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    {
        provide: DataService,
        useClass: DataMockapiService,
    }
  ]
})
export class UserModule { }
