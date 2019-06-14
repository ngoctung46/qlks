import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    { name: 'Dịch Vụ', url: '/hotel-services' },
    { name: 'Thu Chi', url: '/expenses' },
    { name: 'Đặt Phòng', url: '/bookings' },
    { name: 'Báo Cáo', url: '/reports' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
