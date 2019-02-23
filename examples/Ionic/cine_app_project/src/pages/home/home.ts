import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { Http,Headers } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url:string;
  headers:Headers;
  peliculas : any[];

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
      
      this.getPeliculas();
      
}

  getPeliculas(){
    this.url = 'http://localhost:8080/lista/classes/peliculas';
    this.http.get(this.url,{headers:this.headers})
             .map(res => res.json())
             .subscribe( res => {
              console.log('ok',res);
              this.peliculas = res.results;
             },err =>{
               console.log('error',err);
               this.alertCtrl.create({
                title:'Error',
                message:"Existio un error al momento de obtener la lista de películas",
                buttons:[{
                  text:"Aceptar"
                }]
              }).present();
             })
  }

}
