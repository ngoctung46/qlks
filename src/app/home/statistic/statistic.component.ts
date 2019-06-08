import { Component, OnInit, Input } from '@angular/core';
import { Room } from 'src/app/models/room';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  @Input() available = 0;
  @Input() occupied = 0;
  constructor(private readonly firebaseService: FirebaseService) { }

  ngOnInit() {
  }
}
