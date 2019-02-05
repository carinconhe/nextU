import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController,ToastController } from 'ionic-angular';
import {Http,Headers} from '@angular/http';
import {Storage} from '@ionic/storage';
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
  trabajadores : any[];
  localStorage : Storage;
  idUsuario: String;

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
                this.localStorage = new Storage(null);
                this.localStorage.get('idUsuario')
                    .then((valor)=>{
                      this.idUsuario = valor;
                      this.getTrabajadores(null);
                    })
                
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
                            nombre:       data.nombre,
                            email:        data.email,
                            telefono:     data.telefono,
                            imagen:       "http://lorempixel.com/34/34",
                            propietario:  this.idUsuario
                          },
                          {headers:this.headers}
            ).map(res => res.json())
            .subscribe(res =>{
              this.getTrabajadores(null);
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

  getTrabajadores(refresher){
    this.url ='http://localhost:8080/lista/classes/listaTrabajadores?where={"propietario":"'+this.idUsuario+'"}';
    this.http.get(this.url,{headers:this.headers})
              .map(res => res.json())
              .subscribe(res =>{
                console.log('ok',res);
                this.trabajadores = res.results;
                if(refresher!==null)
                  refresher.complete();
              },err => {
                this.alertCtrl.create({
                  title:'Error',
                  message:"Existio un error al momento de obtener la lista de usuarios",
                  buttons:[{
                    text:"Aceptar"
                  }]
                }).present();
              })

  }

  editTrabajador(trabajador) {
    this.alertCtrl.create({
      title: "Editar Trabajador",
      message: "Modifica la información del trabajador aquí",
      inputs: [
        {
          name: "nombre",
          placeholder: "Nombre",
          value: trabajador.nombre
        },
        {
          name: "email",
          placeholder: "Email",
          value: trabajador.email
        },
        {
          name: "telefono",
          placeholder: "Teléfono",
          value: trabajador.telefono
        }
      ],
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Guardar",
          handler: data => {
            this.url = 'http://localhost:8080/lista/classes/listaTrabajadores/'+trabajador.objectId;
            this.http.put(
              this.url,
              {nombre:data.nombre,email:data.email,telefono:data.telefono},
              {headers:this.headers}  
            ).map(
              res => res.json()
            ).subscribe( res => {
              this.toastCtrl.create({
                message: "Los datos del trabajad se han actualizado",
                duration: 3000,
                position: "middle"
              }).present();
              this.getTrabajadores(null);
            },err =>{
              this.toastCtrl.create({
                message: "Ha ocurrido un erroral actualziar el trabajador",
                duration: 3000,
                position: "middle"
              }).present();
            })
          }
        }
      ]
    }).present();
  }

  deleteTrabajador(trabajador){
    this.alertCtrl.create({
      title     : "Eliminar Trabajador",
      message   : "¿Estás seguro de eliminar a este trabajador?",
      buttons   : [
        { text   : "No"},
        { text   : "Si",
          handler : () => {
            this.url = 'http://localhost:8080/lista/classes/listaTrabajadores/'+trabajador.objectId;
            this.http.delete(
              this.url,{headers:this.headers}
            ).map(
              res => res.json()
            ).subscribe( res => {
              this.toastCtrl.create({
                message: "El trabajador fue eliminado",
                duration: 3000,
                position: "middle"
              }).present();
              this.getTrabajadores(null);
            },err =>{
              this.toastCtrl.create({
                message: "Ha ocurrido un error al borrar el trabajador",
                duration: 3000,
                position: "middle"
              }).present();
            })
          }
        }
      ]
    }).present();
  }

}
