import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../services/firebase.service";
import { Room } from "../models/room";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  rooms: Room[] = [];
  available = 0;
  occupied = 0;
  constructor(private readonly firebaseService: FirebaseService) {}

  ngOnInit() {
    this.getRooms();
  }

  getRooms(): void {
    this.firebaseService.getRooms().subscribe(rooms => {
      this.rooms = rooms.sort((a, b) => (a.number < b.number ? -1 : 1));
      this.occupied = rooms.filter(x => x.occupied).length;
      this.available = rooms.length - this.occupied;
    });
  }
}
