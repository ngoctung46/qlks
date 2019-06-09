import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    { name: 'Room Manager', url: '/home' },
    { name: 'Service Manager', url: '/service' },
    { name: 'Expense Manager', url: '/expense' },
    { name: 'Booking Manager', url: '/bookings' },
    { name: 'Report', url: '/reports' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
