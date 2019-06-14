import { Customer } from 'src/app/models/customer';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit, Input } from '@angular/core';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input() room: Room;
  customer: Customer;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    if (this.room.orderId != null) {
      this.firebaseService.getOrder(this.room.orderId)
        .valueChanges().subscribe(o => {
          this.firebaseService.getCustomer(o.customerId)
            .valueChanges().subscribe(c => this.customer = c);
        });
    }
  }
}
