import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { Http,Headers} from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html',
})
export class ComentariosPage {

  url:string;
  headers:Headers;
  comentarios : any[];
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
        this.getComentarios(null);
      });
  }
  
  getComentarios(refresher){
    this.url = 'http://localhost:8080/lista/classes/comentarios';
    this.http.get(this.url,{headers:this.headers})
             .map(res => res.json())
             .subscribe( res => {
              this.comentarios = res.results;
              if(refresher!==null)
                  refresher.complete();
             },err =>{
               console.log('error',err);
               this.alertCtrl.create({
                title:'Error',
                message:"Existio un error al momento de obtener la lista de comentarios.",
                buttons:[{
                  text:"Aceptar"
                }]
              }).present();
             })
  }

  editComentario(comentario){
    this.alertCtrl.create({
      title: "Editar Comentario",
      message: "Modifica la información del comentario aquí",
      inputs: [
        {
          name: "titulo",
          placeholder: "Titulo",
          value: comentario.titulo
        },
        {
          name: "mensaje",
          placeholder: "Mensaje",
          value: comentario.mensaje
        }
      ],
      buttons: [
        {
          text: "Cancelar"
        },
        {
          text: "Guardar",
          handler: data => {
            this.url = 'http://localhost:8080/lista/classes/comentarios/'+comentario.objectId;
            this.http.put(
              this.url,
              {titulo:data.titulo,mensaje:data.mensaje},
              {headers:this.headers}  
            ).map(
              res => res.json()
            ).subscribe( res => {
              this.toastCtrl.create({
                message: "Los datos del comentario se han actualizado",
                duration: 3000,
                position: "middle"
              }).present();
              this.getComentarios(null);
            },err =>{
              this.toastCtrl.create({
                message: "Ha ocurrido un erroral actualizar el comentario",
                duration: 3000,
                position: "middle"
              }).present();
            })
          }
        }
      ]
    }).present();
  }

  borrarComentario(comentario){
    this.alertCtrl.create({
      title     : "Eliminar Comentario",
      message   : "¿Estás seguro de eliminar este comentario?",
      buttons   : [
        { text   : "No"},
        { text   : "Si",
          handler : () => {
            this.url = 'http://localhost:8080/lista/classes/comentarios/'+comentario.objectId;
            this.http.delete(
              this.url,{headers:this.headers}
            ).map(
              res => res.json()
            ).subscribe( res => {
              this.toastCtrl.create({
                message: "El comentario fue eliminado",
                duration: 3000,
                position: "middle"
              }).present();
              this.getComentarios(null);
            },err =>{
              this.toastCtrl.create({
                message: "Ha ocurrido un error al borrar el comentario",
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
