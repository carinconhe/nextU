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

    if(this.shoppingCart['total']>0){
      var rs =this.httpService.setProduct(this.shoppingCart);
      rs.subscribe(
        (data => {
          if(data.error==false){
            console.log(data.result);
            if(data.result==1){
              this.httpService.setShoppingCart({total:0,totalVisible:true,products:[]});
              this.shoppingCart = this.httpService.getShoppingCart();
              this.products= this.shoppingCart['products'];
              this.totalPrice = this.getTotalPriceSCart();
            }
          }
        }),
        (x => {
          this.errorF(x._body);
        })
      );
    }
  }

  errorF(data){
    if(typeof data=='string')
      data = JSON.parse(data);
    if(data.error == true)
      alert(data.message);
  }
}
