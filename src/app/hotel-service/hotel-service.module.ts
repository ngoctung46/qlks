import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelServiceRoutingModule } from './hotel-service-routing.module';
import { HotelServiceComponent } from './hotel-service.component';
import { HotelServiceFormComponent } from './hotel-service-form/hotel-service-form.component';
import { HotelServiceListComponent } from './hotel-service-list/hotel-service-list.component';
import { ModalModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [HotelServiceComponent, HotelServiceFormComponent, HotelServiceListComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HotelServiceRoutingModule
  ]
})
export class HotelServiceModule { }
