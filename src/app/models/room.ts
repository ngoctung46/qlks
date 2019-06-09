import { ModelBase } from './model-base';
import { RoomStatus, RoomType } from '../enums';

export class Room extends ModelBase {
  id: string;
  number: number;
  occupied: boolean;
  rate: number;
  status: RoomStatus;
  type: RoomType;
  checkInTime: Date;
  customerId: string;
  constructor(obj?: any) {
    super();
    this.id = obj && obj.id || null;
    this.number = obj && obj.number || null;
    this.occupied = obj && obj.occupied || false;
    this.rate = obj && obj.rate || (this.type === RoomType.Single ? 350_000 : 450_000);
    this.type = obj && obj.type || RoomType.Single;
    this.status = obj && obj.status || RoomStatus.Clean;
    this.checkInTime = obj && obj.checkInTime || null;
    this.customerId = obj && obj.customerId || null;
  }
}
