import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { NamePipePipe } from '../shared/pipe/name-pipe.pipe';
import { DataMockapiService } from '../shared/data-mockapi.service';
import { DataService } from '../shared/data.service';
import { DataMockService } from '../shared/data-mock.service';

@NgModule({
    declarations: [
        HomeComponent,
        NamePipePipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeRoutingModule
    ],
    providers: [
        {
            provide: DataService,
            useClass: DataMockapiService
        }
    ]
})
export class HomeModule {}
