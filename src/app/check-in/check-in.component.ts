import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  roomId = '';
  constructor(private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('id');
  }

  goBack() {
    this.location.back();
  }

}
