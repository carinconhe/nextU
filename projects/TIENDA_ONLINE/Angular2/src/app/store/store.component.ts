import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  sCart : Object = null;
  valueQuantity : number=0;
  products : Object[]=[];

  constructor(private httpService : HttpService){
    this.sCart = this.httpService.getShoppingCart();
    
    if(this.products.length==0){
      this.httpService.getDatos().subscribe(
        (x => {
          this.drawData(x);
        }),
        (x => {
          this.errorF(x._body);
        })
      );
    }
  }

  ngOnInit() {
  }

  addProductShoppingCart(product,quantity){
    if(parseInt(quantity)>0){
      this.sCart['total']+=parseInt(quantity);
      this.setTotalDataProducts(product.id,parseInt(quantity));
      quantity = this.addUniqueProducts(product,quantity);

      if(this.sCart['totalVisible']==true && this.sCart['total']>0){
        this.sCart['totalVisible']=false;
      }
      this.httpService.setShoppingCart(this.sCart);


    }
  }

  addUniqueProducts(product,quantity){
    if(this.sCart['products'].length==0){
      this.sCart['products'].push({
                                  id:product.id,
                                  name:product.name,
                                  image:product.image,
                                  quantity:parseInt(quantity),
                                  price:product.price,
                                  subtotal:parseInt(quantity)*parseInt(product.price)
                              });
    }else{
      var exist= 0;
      for (let prod of this.sCart['products']) {
        if(parseInt(prod['id'])==parseInt(product.id)){
          prod['quantity']= parseInt(prod['quantity'])+parseInt(quantity);
          prod['subtotal']= parseInt(prod['quantity'])*parseInt(prod['price']);
          exist=1;
        }
      }
      if(exist==0){
        this.sCart['products'].push({
                                    id:product.id,
                                    name:product.name,
                                    image:product.image,
                                    quantity:parseInt(quantity),
                                    price:product.price,
                                    subtotal:parseInt(quantity)*parseInt(product.price)
                                });
      }


    }
    return 0;
  }

  setTotalDataProducts(id,value){
    this.products.forEach(element => {
      if(element['id'] ==id){
        element['quantity'] -= value;
      }
    });
  }

  setQuantity(newValue){
    this.valueQuantity = parseInt(newValue);
  }

  errorF(data){
    if(typeof data=='string')
      data = JSON.parse(data);
    if(data.error == true)
      alert(data.message);
  }

  drawData(data){
    if(typeof data=='string')
      data = JSON.parse(data);
    if(data.error == false){
      this.products = data.products;
      document.body.style.backgroundImage= "url('assets/images/main-fondo.jpg')";
    }
  }

}
