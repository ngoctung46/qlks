import { FirebaseService } from 'src/app/services/firebase.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderId = '';
  services = [];
  orderLines = [];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fs: FirebaseService
  ) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id');
    this.fs.getHotelServices()
      .subscribe(services =>
        this.services = services.sort((a, b) => a.name > b.name ? 1 : -1));
    this.fs.getOrderLinesByOrderId(this.orderId)
        .subscribe(orderlines => this.orderLines = orderlines);
  }

  update(event) {
    console.log(JSON.stringify(event));
  }

  goBack() {
    this.location.back();
  }

}
