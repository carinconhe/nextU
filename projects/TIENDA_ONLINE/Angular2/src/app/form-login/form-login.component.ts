import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';
import { Router } from "@angular/router";
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor(private httpService : HttpService,private router: Router){ }

  enviarForm(form){
    console.log('-');
    var datos = {'email':form.value.email_input,'password':form.value.password_input}
    var rs = this.httpService.sendDatos(datos);

    rs.subscribe(
    	(x => {
        this.router.navigate(['catalogo']);
        document.getElementById("navtop").style.display = "block";
      }),
    	(x => {
        this.errorF(x._body);
      })
    );
  }

  errorF(data){
    if(typeof data=='string')
      data = JSON.parse(data);
    if(data.error == true)
      alert(data.message);
  }

  ngOnInit() {

    this.httpService.getDatos().subscribe(
        (data: Response) => console.log(data)
    )
  }

}
