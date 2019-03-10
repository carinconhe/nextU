import { Component } from '@angular/core';
import { TextField } from "tns-core-modules/ui/text-field";
import { hipoUniversityService } from '../services/hipoUniversity.services';

@Component({
    selector: "buscador",
    moduleId: module.id,
    templateUrl: "./buscador.component.html",
    styleUrls: ["./buscador.component.css"]
})

export class BuscadorComponent {
    items: any =[{
        name        :"",
        country     :"",
        web_pages   :""
    }]
    constructor(private datosUniversidades:hipoUniversityService){

    }
    buscarUniversidad(args){
        let textField = <TextField>args.object;
        this.datosUniversidades.search = textField.text
        this.datosUniversidades.getData()
            .subscribe(
                result =>  {
                    this.items = result;
                }, err =>{
                    console.error('Error',err);
                }
            );
        console.log(this.items);
    }
}