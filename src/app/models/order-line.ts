import { ModelBase } from './model-base';
import { HotelService } from './hotel-service';
export class OrderLine extends ModelBase {
  id: string;
  service: HotelService;
  quantity: number;
  total: number;
  orderId: string;
  serviceId: string;
  constructor(obj?: any) {
    super();
    this.id = obj && obj.id || null;
    this.service = obj && obj.service || null;
    this.quantity = obj && obj.quantity || 0;
    this.total = obj && obj.total || 0;
    this.orderId = obj && obj.orderId || null;
    this.serviceId = this.service && this.service.id || null;
  }

}
