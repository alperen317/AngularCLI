import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PopupContentComponent } from './popup-content/popup-content.component';
import { PopupFooterComponent } from './popup-footer/popup-footer.component';

@NgModule({
    declarations: [
        PopupComponent,
        PopupContentComponent,
        PopupFooterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        PopupComponent,
        PopupContentComponent,
        PopupFooterComponent
    ]
})
export class PopupModule {}
