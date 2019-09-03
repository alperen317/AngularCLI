import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowPasswordDirective } from './show-password.directive';
import { ShowPassWord2Directive } from './show-pass-word2.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowPasswordDirective,
    ShowPassWord2Directive
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
