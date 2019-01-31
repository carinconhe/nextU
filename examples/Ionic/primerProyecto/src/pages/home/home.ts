import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController,ToastController } from 'ionic-angular';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  url:string;
  headers:Headers;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public http: Http,
              public toastCtrl: ToastController) {
                this.headers = new Headers();
                this.headers.append('X-Parse-REST-API-Key','restAPIKey');
                this.headers.append('X-Parse-Master-Key','masterKey');
                this.headers.append('X-Parse-Application-Id','Lista1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  dialogoAdd(){
    this.alertCtrl.create({
      title: "Añadir Trabajador",
      message: "Ingrese los datos del nuevo usuario",
      inputs:[{
        name: "nombre",
        placeholder:"Nombre"
      },{
        name: "email",
        placeholder:"Email"
      },{
        name: "telefono",
        placeholder:"Teléfono"
      }],
      buttons:[{
        text : "Cancelar"
      },{
        text: "Guardar",
        handler: data =>{
          let loading = this.loadingCtrl.create({content:"Cargando"});
          loading.present();
          this.url = "http://localhost:8080/lista/classes/listaTrabajadores";
          this.http.post(this.url,
                          {
                            nombre:data.nombre,
                            email:data.email,
                            telefono:data.telefono,
                            imagen:"http://lorempixel/34/34"
                          },
                          {headers:this.headers}
            ).map(res => res.json())
            .subscribe(res =>{
              loading.dismiss();
              this.toastCtrl.create({
                message: "El trabajador se ha creado exitosamente",
                duration: 4000,
                position: "middle"
              }).present();
            }, err => {
              loading.dismiss();
              this.toastCtrl.create({
                message: "Ha ocurrido un error, inténtelo de nuevo",
                duration: 4000,
                position: "middle"
              }).present();
            });

        }
      }]
    }).present();
  }

}
