import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactoParaEncontrar: string;
  contactoEncontrado: any;
  buscar: boolean;

  constructor(public navCtrl: NavController, private contacts: Contacts) {
    this.contactoParaEncontrar = '';
    this.contactoEncontrado   = [];
    this.buscar               = false;
  }

  buscarContacto(val){
    this.contacts.find(['*'],{filter:val}).then((contacts)=>{
      this.contactoEncontrado = contacts;
      alert(JSON.stringify(contacts[0]));
    })

    if(this.contactoEncontrado.length == 0){
      this.contactoEncontrado.push({displayName:'Ningun contacto encontrado'});
      this.buscar = true;
    }
  }

}
