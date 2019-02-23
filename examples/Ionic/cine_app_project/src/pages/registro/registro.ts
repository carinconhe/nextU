import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "../../user-model";

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  usuarioARegistrar: User = {
    username: "",
    password: "",
    name: "",
    email: ""
  }

  confirmarContrasena: string;
  url: string;
  headers:Headers;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public http: Http) {
      this.headers = new Headers();
      this.headers.append('X-Parse-REST-API-Key','restAPIKey');
      this.headers.append('X-Parse-Master-Key','masterKey');
      this.headers.append('X-Parse-Application-Id','Lista1');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  registrar(){
    if(this.usuarioARegistrar.password!= this.confirmarContrasena){
      this.alertCtrl.create({
        title:"Error",
        message:"Las contraseñas no coinciden, intentenlo de nuevo.",
        buttons: ['Aceptar']
      }).present();
      return;
    }
    this.url = "http://localhost:8080/lista/users";
    this.http.post(this.url,this.usuarioARegistrar,{headers:this.headers})
              .map(res => res.json())
              .subscribe(res =>{
                console.log('Ok',res);
                this.alertCtrl.create({
                  title:"Usuario Registrado",
                  message:"El usuario se ha registrado exitosamente en la aplicación"+
                          "Regrese a la página de inicio de sesion para ingresar",
                  buttons:[{
                    text:"Inicia Sesión",
                    handler:()=>{
                      this.navCtrl.pop();
                    }
                  }]
                }).present();
              },err =>{
                console.log('Error',err);
                this.alertCtrl.create({
                  title:"Error",
                  message:err.text(),
                  buttons:[{
                    text:"Aceptar",
                  }]
                }).present();
              });
  }

}
