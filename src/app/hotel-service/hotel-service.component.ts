import { HotelService } from './../models/hotel-service';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-service',
  templateUrl: './hotel-service.component.html',
  styleUrls: ['./hotel-service.component.css']
})
export class HotelServiceComponent implements OnInit {
  hotelServices: HotelService[] = [];
  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.fb.getHotelServices()
      .subscribe(services =>
        this.hotelServices = services.sort((a, _) => a.isStockable ? -1 : 1));
  }

}
