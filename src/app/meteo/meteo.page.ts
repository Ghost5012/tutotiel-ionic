import { HttpClient, HttpContext } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  private ville:string;
  private meteos;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  loadMeteo(){
    //this.meteos = this.meteoService.getMeteo(this.ville);
    //console.log(this.meteos);
  
    this.httpClient.get("http://api.openweathermap.org/data/2.5/forecast?q="+this.ville+"&appid=bc67ef94a6906be6cf8cc11d356589a3")
    .subscribe(result=>{
      console.log(result);
      this.meteos = result;
    },err=>{
      console.log(err);
    })
  }

}
