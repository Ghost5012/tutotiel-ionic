import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  activePageTitle='Ges Stock';
  Pages=[
    {
      title:'Stock',
      url:'/',
      icon:'home'
    },{
      title:'Meteo',
      url:'meteo',
      icon:'rainy'
    },{
      title:'GPS',
      url:'gps',
      icon:'globe'
    }
  ]
  constructor() {}
}
