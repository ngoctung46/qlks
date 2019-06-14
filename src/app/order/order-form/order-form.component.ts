import { FirebaseService } from './../../services/firebase.service';
import { HotelService } from './../../models/hotel-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderLine } from 'src/app/models/order-line';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  @Input() services = [];
  @Input() orderId = null;
  @Output() itemChanged = new EventEmitter<any>();
  orderForm: FormGroup;
  selectedService = new HotelService();
  quantity = 1;
  total = 0;
  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      service: [null, Validators.required],
      quantity: [null, Validators.required]
    });
    this.orderForm.valueChanges.subscribe(orderForm => {
      this.quantity = orderForm.quantity;
      this.total = this.selectedService && (this.selectedService.unitPrice * this.quantity);
    });
  }

  submit() {
    this.addOrderLine();
    this.firebaseService
      .updateServiceStock(
        this.selectedService.id,
        (this.selectedService.inStock - this.quantity)
      );
    this.orderForm.reset();
  }

  typeaheadOnSelect(event) {
    const service = event.item as HotelService;
    this.selectedService = service;
  }

  addOrderLine() {
    const ol = new OrderLine({
      service: this.selectedService,
      quantity: this.quantity,
      total: this.total,
      orderId: this.orderId
    });
    const id = this.firebaseService.addOrderLine(ol);
    ol.id = id;
    this.itemChanged.emit(ol);
  }

  doesExist(oderLine: OrderLine) {

  }
}
