export class HotelService {
  id: string;
  name: string;
  description: string;
  unitPrice: number;
  isStockable: boolean;
  inStock: number;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.name = obj && obj.name || '';
    this.description = obj && obj.description || '';
    this.unitPrice = obj && obj.unitPrice || 0;
    this.isStockable = obj && obj.isStockable || true;
    this.inStock = obj && obj.inStock || 0;
  }
}
