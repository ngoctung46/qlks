import { OrderLine } from './../../models/order-line';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnChanges {
  @Input() orderLines: OrderLine[] = [];
  total = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.total = 0;
    this.orderLines.forEach(ol => {
      this.total += ol.total;
    });
    this.orderLines = this.sumArray(this.orderLines);
  }

  sumArray(arr) {
    const output = arr.reduce((accumulator, cur) => {
      const id = cur.service.id;
      const found = accumulator.find((elem) => {
          return elem.service.id === id;
      });
      if (found) {
        found.quantity += cur.quantity;
        found.total = found.quantity * found.service.unitPrice;
      } else {
        accumulator.push(cur);
      }
      return accumulator;
    }, []);
    return output;
  }
}
