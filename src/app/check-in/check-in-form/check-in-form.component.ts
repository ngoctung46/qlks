import { ActivatedRoute, Router } from '@angular/router';
import { Room } from './../../models/room';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.component.html',
  styleUrls: ['./check-in-form.component.css']
})
export class CheckInFormComponent implements OnInit {
  checkInForm: FormGroup;
  @Input() roomId = '';
  customer: Customer;
  customers = [];
  noResult = false;
  room: AngularFirestoreDocument<Room>;
  constructor(private fb: FormBuilder, private firebaseService: FirebaseService, private router: Router) {
  }

  ngOnInit() {
    this.customer = new Customer();
    this.firebaseService.getCustomers()
      .subscribe(customers => this.customers = customers);
    this.room = this.firebaseService.getRoom(this.roomId);
    this.initForm(this.customer);
  }

  submit() {
    if (this.checkInForm.invalid) {
      return;
    }
    this.customer = this.checkInForm.value as Customer;
    if (this.noResult) {
      this.firebaseService.addCustomer(this.customer);
    }
    this.updateRoom();
    this.router.navigate(['/']);
  }

  updateRoom() {
    this.room.update({
      checkInTime: new Date(),
      customerId: this.customer.id,
      occupied: true
    });
  }

  get cf() {
    return this.checkInForm.controls;
  }

  typeaheadNoResults(event: boolean): void {
    this.noResult = event;
  }

  typeaheadOnSelect(event) {
    const customer = event.item as Customer;
    customer.birthDate = new Date(event.item.birthDate.seconds);
    customer.issuedDate = new Date(event.item.issuedDate.seconds);
    customer.expiredDate = new Date(event.item.expiredDate.seconds);
    console.log(JSON.stringify(customer));
    this.setFormValues(customer);
  }

  setFormValues(customer: Customer) {
    this.checkInForm.patchValue({
      name: customer.name,
      birthDate: customer.birthDate,
      birthPlace: customer.birthPlace,
      nationality: customer.nationality,
      id: customer.id,
      issuedDate: customer.issuedDate,
      expiredDate: customer.expiredDate,
      issuedPlace: customer.issuedPlace,
      addressLine1: customer.addressLine1,
      addressLine2: customer.addressLine2,
      province: customer.province,
      country: customer.country
    });
  }

  initForm(customer: Customer) {
    this.checkInForm = this.fb.group({
      name: [customer.name, [Validators.required, Validators.maxLength(125)]],
      birthDate: [customer.birthDate, Validators.required],
      birthPlace: [customer.birthPlace, Validators.required],
      nationality: [customer.nationality, Validators.required],
      id: [customer.id, Validators.required],
      issuedDate: [customer.issuedDate, Validators.required],
      expiredDate: [customer.expiredDate, Validators.required],
      issuedPlace: [customer.issuedPlace, Validators.required],
      addressLine1: [customer.addressLine1],
      addressLine2: [customer.addressLine2],
      province: [customer.province, Validators.required],
      country: [customer.country, Validators.required]
    });
  }
}
