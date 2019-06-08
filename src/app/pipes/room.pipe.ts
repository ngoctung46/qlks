import { RoomStatus } from './../enums';
import { Pipe, PipeTransform } from '@angular/core';
import { RoomType } from '../enums';

@Pipe({
  name: 'room'
})
export class RoomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case RoomType.Single: return 'Phòng Đơn';
      case RoomType.Double: return 'Phòng Đôi';
      case RoomStatus.Clean: return 'Sạch';
      case RoomStatus.CustomerOut: return 'Khách ra ngoài';
      case RoomStatus.Dirty: return 'Dơ';
      default: return null;
    }
  }

}
