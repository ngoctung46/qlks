import { AngularMaterialModule } from './../angular-material.module';
import { RoomPipe } from './../pipes/room.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomComponent } from './room-list/room/room.component';
import { StatisticComponent } from './statistic/statistic.component';




@NgModule({
  declarations: [
    HomeComponent,
    RoomPipe,
    RoomListComponent,
    RoomComponent,
    StatisticComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
