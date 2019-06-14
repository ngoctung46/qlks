import { FirebaseService } from './../../services/firebase.service';
import { HotelService } from './../../models/hotel-service';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-hotel-service-list',
  templateUrl: './hotel-service-list.component.html',
  styleUrls: ['./hotel-service-list.component.css']
})
export class HotelServiceListComponent implements OnInit {
  @Input() hotelServices: HotelService[] = [];
  modalRef: BsModalRef;
  confirmModalRef: BsModalRef;
  qty: number;
  deleteCode: string;
  selectedService: HotelService;
  constructor(private firebaseService: FirebaseService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  showModal(template: TemplateRef<any>, service: HotelService) {
    this.selectedService = service;
    this.modalRef = this.modalService.show(template);
  }

  hideModal() {
    if (this.qty == null || this.qty <= 0) { return; }
    this.update();
    this.qty = null;
    this.modalRef.hide();
  }

  hideConfirmModal() {
    if (this.deleteCode === 'Ng0c@Tung@') {
      this.delete(this.selectedService);
      this.deleteCode = '';
      this.modalRef.hide();
    } else {
      this.modalRef.hide();
      this.deleteCode = '';
    }
  }

  update() {
    console.log(`id: ${this.selectedService.id} qty: ${this.qty}`);
    this.selectedService.inStock += this.qty;
    this.firebaseService
      .updateService(this.selectedService.id, this.selectedService.inStock);
  }

  delete(service) {
    this.firebaseService.deleteService(service.id);
    const index = this.hotelServices.indexOf(service);
    this.hotelServices = this.hotelServices.splice(index - 1, 1);
  }

}
