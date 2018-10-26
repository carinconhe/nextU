import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 't-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent {
  toggle : boolean = false;
  products : Object;

  constructor(private httpService : HttpService){
    this.toggle = this.httpService.getToggle();
    this.products = this.httpService.getShoppingCart();
  }


}
