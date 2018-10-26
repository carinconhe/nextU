import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart :Object={};
  products :Object[]=[];
  totalPrice :number=0;

  constructor(private httpService : HttpService){
    this.shoppingCart = this.httpService.getShoppingCart();
    this.products= this.shoppingCart['products'];
    this.totalPrice = this.getTotalPriceSCart();
  }

  ngOnInit() {

  }

  getTotalPriceSCart(){
    var result =0;
    this.products.forEach(element=>{
      result += parseInt(element['subtotal']);
    });
    return result;
  }

  removeAllSCart(){
    this.httpService.setShoppingCart({total:0,totalVisible:true,products:[]});
    this.httpService.setToggle(false);
    this.shoppingCart = this.httpService.getShoppingCart();
    this.products= this.shoppingCart['products'];
    this.totalPrice = this.getTotalPriceSCart();
  }

  payProducts(){
    console.log(this.httpService.setProduct(this.shoppingCart));
    this.httpService.setShoppingCart({total:0,totalVisible:true,products:[]});
    this.shoppingCart = this.httpService.getShoppingCart();
    this.products= this.shoppingCart['products'];
    this.totalPrice = this.getTotalPriceSCart();
  }
}
