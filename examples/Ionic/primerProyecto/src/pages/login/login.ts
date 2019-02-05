import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http, Headers} from '@angular/http';
import {Storage} from '@ionic/storage';
import {RegistroPage} from '../registro/registro';
import {HomePage} from '../home/home';

import { User } from "../../user-model";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usuarioALoguear: User = {
    username: "",
    password: ""
  }

  url:string;
  headers:Headers;
  localStorage:Storage;

  constructor(public navCtrl: NavController, 
              public alertCtrl:AlertController,
              public http: Http) {
                this.headers = new Headers();
                this.headers.append('X-Parse-REST-API-Key','restAPIKey');
                this.headers.append('X-Parse-Master-Key','masterKey');
                this.headers.append('X-Parse-Application-Id','Lista1');
                this.localStorage = new Storage(null);
  }

  irARegistro(){
    this.navCtrl.push(RegistroPage);
  }
  
  login() {
    if (!(this.usuarioALoguear.username && this.usuarioALoguear.password)){
      this.alertCtrl.create({title: "Error", message: "Ningún campo puede ser vacío", buttons: [{text: "Aceptar"}]})
        .present()
      return;
    }else{
      console.log('Inicia');
      this.url ="http://localhost:8080/lista/login?username="+this.usuarioALoguear.username+
                "&password="+this.usuarioALoguear.password;
      this.http.get(this.url,{headers:this.headers})
                .subscribe(res =>{
                  
                  this.localStorage.set('idUsuario',res.json().objectId)
                                   .then(() =>{
                                    this.navCtrl.setRoot(HomePage);
                                   })
                },err=>{
                  this.alertCtrl.create({
                    title:'Error',
                    message:"El usuario o la contraseña son incorrectos",
                    buttons:[{
                      text:"Aceptar"
                    }]
                  }).present()
                })
    }
  }

}
