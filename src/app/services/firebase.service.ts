import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Room } from '../models/room';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private roomCollection: AngularFirestoreCollection<Room>;
  constructor(private readonly afs: AngularFirestore) {}

  getRooms(): Observable<Room[]> {
    const rooms = this.afs.collection<Room>('rooms');
    return rooms.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Room;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  getRoom(id: string): AngularFirestoreDocument<Room> {
    return this.afs.doc<Room>(`rooms/${id}`);
  }

  getCustomers(): Observable<Customer[]> {
    const customers = this.afs.collection<Customer>('customers');
    return customers.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Customer;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  addCustomer(customer: Customer) {
    this.afs.collection<Customer>('customers')
      .doc(customer.id).set(customer);
  }

  initApp() {
    this.afs
      .collection<Room>('rooms')
      .valueChanges()
      .subscribe(rooms => {
        if (rooms.length <= 0) {
          this.initRooms();
        }
      });
  }

  private initRooms() {
    for (let i = 1; i <= 3; i++) {
      const base = 100 * i;
      for (let j = 1; j <= 4; j++) {
        const room = new Room({ number: base + j });
        this.afs.collection('rooms').add(room.getData());
      }
    }
  }
}
