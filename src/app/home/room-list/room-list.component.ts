import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit, Input } from '@angular/core';
import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent{
  @Input() rooms = [];
}
