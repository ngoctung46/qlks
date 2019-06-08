import { ModelBase } from './model-base';
export class Customer extends ModelBase {
  name: string;
  birthDate: Date;
  birthPlace: string;
  nationality: string;
  id: string;
  issuedDate: Date;
  expiredDate: Date;
  issuedPlace: string;
  addressLine1: string;
  addressLine2: string;
  province: string;
  country: string;
  orderId: string;

  constructor(obj?: any) {
    super();
    this.name = obj && obj.name || '';
    this.birthDate = obj && obj.birthDate || null;
    this.birthPlace = obj && obj.birthPlace || null;
    this.id = obj && obj.id || null;
    this.issuedDate = obj && obj.issuedDate || null;
    this.expiredDate = obj && obj.expiredDate || null;
    this.issuedPlace = obj && obj.issuedPlace || '';
    this.addressLine1 = obj && obj.addressLine1 || '';
    this.addressLine2 = obj && obj.addressLine2 || '';
    this.province = obj && obj.province || '';
    this.country = obj && obj.country || '';
    this.orderId = obj && obj.orderId || null;
  }
}
