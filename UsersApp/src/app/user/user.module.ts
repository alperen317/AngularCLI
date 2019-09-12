import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { TcControlDirective } from './tcControl.directive';



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
  ]
})
export class UserModule { }
