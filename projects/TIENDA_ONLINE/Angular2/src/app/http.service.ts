import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  getDatos(){
    console.log('ingresa a getDatos');
    //return this.http.get('https://back-end-tareas-5b5c7.firebaseio.com/.json')
    return this.http.get('https://ejemplo-http.firebaseio.com/.json')
    .map((response: Response)=> response.json())
  }

  sendDatos(data:any){
    console.log(data);
    const datos = data;//{'email':'camilo.rincon@barbara.net.co','password':'Rincon12345'} ;
    return this.http.post('http://giros.pruebasbarbaras.co/api/login', datos).map((response: Response)=> response.json())
  }

}
