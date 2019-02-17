import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild('map') mapElement : ElementRef;
  map:any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  ionViewDidLoad(){
    this.cargarMapa();
  }

  cargarMapa(){
    this.geolocation.getCurrentPosition().then((position) =>{
      let latlng = new google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );

      let mapOptions = {
        center: latlng,
        zoom : 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
    },(err)=>{
      console.log('Error',err);
    })
    
  }

}
