import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopupModule } from './shared/popup/popup.module';
import { DropdownComponent } from './dropdown/dropdown.component';






@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
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
