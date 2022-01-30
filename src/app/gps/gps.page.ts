import { Component, OnInit } from '@angular/core';
//import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {GpsService} from 'src/app/services/gps.service'

@Component({
  selector: 'app-gps',
  templateUrl: './gps.page.html',
  styleUrls: ['./gps.page.scss'],
})
export class GpsPage implements OnInit {
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  
  constructor(private geolocation: Geolocation,private gpsService:GpsService) {}

   getCurrentCoordinates() {
     this.geolocation.getCurrentPosition().then((resp) => {
       this.latitude = resp.coords.latitude;
       this.longitude = resp.coords.longitude;
       this.gpsService.setPosition(this.latitude,this.longitude).then((data)=>{
         console.log(data);
         
       }).catch((error)=>{
        console.log('Error save location', error);
       })
      }).catch((error) => {
        console.log('Error getting location', error);
      });
   }

  ngOnInit() {
    this.getCurrentCoordinates();
    this.gpsService.getPosition();
    //
  }

}
