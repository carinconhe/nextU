import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mensaje :string;
  constructor(public navCtrl: NavController, private localNotifications:LocalNotifications) {

  }
  enviarNotificacion(){
    alert("Enviada");
    this.localNotifications.schedule({
      title:"Notificacion de pruebas",
      text:this.mensaje,
      trigger: {at: new Date(new Date().getTime() + 3600)},
      sound:null
    });
  }
}
