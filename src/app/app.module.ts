import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
  IonicModule.forRoot(), 
  AppRoutingModule,
  HttpClientModule,
  AngularFireModule.initializeApp(environment.fireConf),
	  //AngularFireModule.initializeApp(environment.fireConf),
	  AngularFireAnalyticsModule,
	  AngularFirestoreModule,
	  //AngularFireDatabaseModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Geolocation,NativeStorage],
  bootstrap: [AppComponent],
})

export class AppModule {
}

