import { AngularMaterialModule } from './../angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckInRoutingModule } from './check-in-routing.module';
import { CheckInComponent } from './check-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CheckInFormComponent } from './check-in-form/check-in-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
  declarations: [CheckInComponent, CheckInFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    AngularMaterialModule,
    CheckInRoutingModule
  ]
})
export class CheckInModule { }
