import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
private meteos;
  constructor(private httpClient:HttpClient) { }

  getMeteo(ville: string) {
    console.log(ville);
    this.httpClient.get("http://api.openweathermap.org/data/2.5/forecast?q="+ville+"&appid=bc67ef94a6906be6cf8cc11d356589a3")
    .subscribe(result=>{
      console.log(result);
      this.meteos = result;
    },err=>{
      console.log(err);
    })
  }
}
