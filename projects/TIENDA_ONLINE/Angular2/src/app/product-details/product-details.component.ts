import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productName : String;
  products : Object[];
  constructor(private activatedRoute : ActivatedRoute,
              private httpService : HttpService,
              private location: Location,
              private router: Router) {
    this.productName = this.activatedRoute.snapshot.params['name'];
  }

  ngOnInit() {
    var rs =this.httpService.getProduct({'term':this.productName});
    rs.subscribe(
    	(x => {
        if(x.error==false){
            console.log(x.products[0]);
            this.products  = x.products;
        }

      }),
    	(x => {
        this.errorF(x._body);
      })
    );
    document.body.style.backgroundImage= "url('assets/images/main-fondo.jpg')";
  }

  errorF(data){
    if(typeof data=='string')
      data = JSON.parse(data);
    if(data.error == true)
      alert(data.message);
  }

  backClicked() {
    //this.location.back();
    console.log('---');
    this.router.navigate(['catalogo']);
  }

}
