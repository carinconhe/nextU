import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { Http,Headers } from '@angular/http';
import {Storage} from '@ionic/storage';
import { ComentariosPage } from '../comentarios/comentarios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url:string;
  headers:Headers;
  peliculas : any[];
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
        this.getPeliculas(null);
      })
}

  getPeliculas(refresher){
    this.url = 'http://localhost:8080/lista/classes/peliculas';
    this.http.get(this.url,{headers:this.headers})
             .map(res => res.json())
             .subscribe( res => {
              this.peliculas = res.results;
              if(refresher!==null)
                  refresher.complete();
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

  darLike(pelicula){
    let valueCorazon = false;
    if(pelicula.corazon===undefined || pelicula.corazon===false){
        valueCorazon = true;      
    }
    this.url = 'http://localhost:8080/lista/classes/peliculas/'+pelicula.objectId;
    this.http.put(
      this.url,
      {corazon:valueCorazon},
      {headers:this.headers}  
    ).map(
      res => res.json()
    ).subscribe( res => {
      this.toastCtrl.create({
        message: "La pelicula "+pelicula.titulo+" fue actualizada",
        duration: 3000,
        position: "middle"
      }).present();
      this.getPeliculas(null);
    },err =>{
      this.toastCtrl.create({
        message: "Ha ocurrido un erroral actualziar la pelicula",
        duration: 3000,
        position: "middle"
      }).present();
    })
  }

  comentarpelicula(pelicula){
    this.alertCtrl.create({
      title: "Añadir Comentario",
      message: "Ingrese los datos del nuevo usuario",
      inputs:[{
        name: "titulo",
        placeholder:"Título"
      },{
        name: "mensaje",
        placeholder:"Mensaje"
      }],
      buttons:[{
        text : "Cancelar"
      },{
        text: "Guardar",
        handler: data =>{
          let loading = this.loadingCtrl.create({content:"Cargando"});
          loading.present();
          this.url = "http://localhost:8080/lista/classes/comentarios";
          this.http.post(this.url,
                          {
                            titulo:           data.titulo,
                            mensaje:          data.mensaje,
                            pelicula:         pelicula.objectId,
                            propietario:      this.idUsuario,
                            tituloPelicula:   pelicula.titulo,
                            imagenPelicula:   pelicula.imagen
                          },
                          {headers:this.headers}
            ).map(res => res.json())
            .subscribe(res =>{
              this.getPeliculas(null);
              loading.dismiss();
              this.toastCtrl.create({
                message: "El comentario se ha creado exitosamente",
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

  irAComentarios(){
    this.navCtrl.push(ComentariosPage);
  }
}
