import { HotelService } from './../models/hotel-service';
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
import { OrderLine } from '../models/order-line';
import { Order } from '../models/order';

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

  getCustomer(id: string): AngularFirestoreDocument<Customer> {
    return this.afs.doc<Customer>(`customers/${id}`);
  }

  addCustomer(customer: Customer) {
    this.afs
      .collection<Customer>('customers')
      .doc(customer.id)
      .set(customer);
  }

  addOrderLine(orderLine: OrderLine) {
    const id = this.afs.createId();
    this.afs
      .collection<OrderLine>('orderlines')
      .doc(id)
      .set(orderLine.getData());
    return id;
  }

  updateOrderLineQuantity(id: string, quantity: number) {
    const ol = this.afs.doc<OrderLine>('orderlines');
    ol.update({quantity});
  }

  addOrder(order: Order) {
    const id = this.afs.createId();
    this.afs
      .collection<Order>('orders')
      .doc(id)
      .set(order.getData());
    return id;
  }

  updateOrderTotal(id: string, total: number) {
    const order = this.afs.doc<Order>(`orders/${id}`);
    order.update({total});
  }

  updateServiceStock(id: string, amount: number) {
    const  service = this.afs.doc<HotelService>(`hotel-services/${id}`);
    service.update({inStock: amount});
  }


  getOrder(orderId: string): AngularFirestoreDocument<Order> {
    return this.afs.doc<Order>(`orders/${orderId}`);
  }

  getOrderLinesByOrderId(orderId: string): Observable<OrderLine[]> {
    const orderLines = this.afs.collection<OrderLine>('orderlines', ref =>
      ref.where('orderId', '==', orderId));
    return orderLines.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as OrderLine;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );
  }

  addHotelService(hotelService: HotelService): string {
    const id = this.afs.createId();
    this.afs
      .collection<HotelService>('hotel-services')
      .doc(id)
      .set(hotelService);
    return id;
  }

  updateService(id: string, qty: number) {
    const service = this.afs.doc<HotelService>(`hotel-services/${id}`);
    service.update({ inStock: qty });
  }

  deleteService(id: string) {
    const service = this.afs.doc<HotelService>(`hotel-services/${id}`);
    service.delete();
  }

  getHotelServices(): Observable<HotelService[]> {
    const services = this.afs.collection<HotelService>('hotel-services');
    return services.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as HotelService;
          data.id = a.payload.doc.id;
          return data;
        })
      )
    );
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
