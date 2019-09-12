import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { NamePipePipe } from '../shared/pipe/name-pipe.pipe';

@NgModule({
    declarations: [
        HomeComponent,
        NamePipePipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeRoutingModule
    ]
})
export class HomeModule {}
