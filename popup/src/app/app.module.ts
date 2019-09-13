import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupModule } from './shared/popup/popup.module';






@NgModule({
  declarations: [
    AppComponent,
    // PopupContentComponent,
    // PopupFooterComponent,
    // PopupComponent,

  ],
  imports: [
    BrowserModule,
    PopupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
