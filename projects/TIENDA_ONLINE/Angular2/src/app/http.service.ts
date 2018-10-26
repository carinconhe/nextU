import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {
  private   toggle : boolean = false;
  private shoppingCart = {total:0,totalVisible:true,products:[]};
  constructor(private http: Http) { }

  getDatos(){
    return this.http.get('http://giros.pruebasbarbaras.co/api/getProductsApi')
    .map((response: Response)=> response.json());
  }

  sendDatos(data:any){
    this.setToggle(false);
    const datos = data;//{'email':'camilo.rincon@barbara.net.co','password':'Rincon12345'} ;
    return this.http.post('http://giros.pruebasbarbaras.co/api/login', data)
    .map((response: Response)=> response.json())
  }

  getToggle(){
    return this.toggle;
  }

  setToggle(value){
    this.toggle =value;
  }

  getProduct(data:any){
    return this.http.post('http://giros.pruebasbarbaras.co/api/getProductsApi', data)
    .map((response: Response)=> response.json())
  }

  setProduct(data){
    return this.http.post('http://giros.pruebasbarbaras.co/api/setProductsApi', data)
    .map((response: Response)=> response.json())
  }

  getShoppingCart(){
    return this.shoppingCart;
  }

  setShoppingCart(data){
    this.shoppingCart = data;
  }

}
