import { FirebaseService } from 'src/app/services/firebase.service';
import { HotelService } from './../../models/hotel-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-service-form',
  templateUrl: './hotel-service-form.component.html',
  styleUrls: ['./hotel-service-form.component.css']
})
export class HotelServiceFormComponent implements OnInit {
  serviceForm: FormGroup;
  constructor(private fb: FormBuilder, private fs: FirebaseService) { }

  ngOnInit() {
    this.serviceForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      unitPrice: [0, Validators.required],
      isStockable: [true],
      inStock: [0]
    });
  }

  submit() {
    const service = this.serviceForm.value as HotelService;
    this.fs.addHotelService(service);
    this.serviceForm.reset();
  }

}
