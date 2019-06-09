export class OrderLine {
  id: string;
  item: string;
  quantity: number;
  price: number;
  total: number;
  customerId: string;
  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.item = obj && obj.item || null;
    this.quantity = obj && obj.quantity || 0;
    this.price = obj && obj.price || 0;
    this.total = obj && obj.total || 0;
    this.customerId = obj && obj.customerId || null;
  }
}
