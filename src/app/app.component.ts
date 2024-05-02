import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Laporkan', url: '/laporan', icon: 'paper-plane' },
    { title: 'Cari', url: '/folder/pencarian', icon: 'search' },
  ];
  public labels = ['Logout'];
  constructor() {}
}
