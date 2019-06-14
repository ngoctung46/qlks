import { OrderStatus } from './../enums';
import { ModelBase } from './model-base';
export class Order extends ModelBase {
  id: string;
  customerId: string;
  orderLineIds: string[];
  roomId: string;
  total: number;
  status: OrderStatus;

  constructor(obj?: any) {
    super();
    this.id = obj && obj.id || null;
    this.customerId = obj && obj.customerId || null;
    this.roomId = obj && obj.roomId || null;
    this.orderLineIds = obj && obj.orderLineIds || [];
    this.total = obj && obj.total || 0;
    this.status = obj && obj.status || OrderStatus.UnPaid;
  }
}
