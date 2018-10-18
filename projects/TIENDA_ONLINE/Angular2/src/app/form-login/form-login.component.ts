import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  constructor(private httpService : HttpService){ }

  enviarForm(form){
    //console.log(form.value.email_input,form.value.password_input);
    var datos = {'email':form.value.email_input,'password':form.value.password_input}
    var rs = this.httpService.sendDatos(datos);
    rs.subscribe(
    	(x => console.log('Success:', x)),
    	(x => console.log('Error:', x)),
    	(() => console.log('Complete'))
    );
  }

  ngOnInit() {
    console.log('Init Form');
    this.httpService.getDatos().subscribe(
        (data: Response) => console.log(data)
    )
  }

}
