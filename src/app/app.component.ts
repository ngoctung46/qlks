import { FirebaseService } from './services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'KS HOANG LONG';
  constructor(private readonly firebaseService: FirebaseService) {}
  ngOnInit() {
    // this.firebaseService.initApp();
  }
}
