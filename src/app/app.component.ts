import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'home' },
    { title: 'Laporkan', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Cari', url: '/folder/favorites', icon: 'search' },
  ];
  public labels = ['Logout'];
  constructor() {}
}
