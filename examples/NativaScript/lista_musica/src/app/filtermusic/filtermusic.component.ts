import { Component } from '@angular/core';
import { EventData } from  "tns-core-modules/data/observable";
import { TextField } from "tns-core-modules/ui/text-field";
import { Page } from "tns-core-modules/ui/page"
import { Router } from '@angular/router';

@Component({
    selector: "ns-filtermusic",
    moduleId: module.id,
    templateUrl: "./filtermusic.component.html"
})

export class FiltermusicComponent {
    constructor(private page :Page,
                private router: Router){}

    buscar(){
        let textfieldBuscar = this.page.getViewById<TextField>("textfieldBuscar");
        this.router.navigate(['/items',textfieldBuscar.text]);
    }
    onTextChange(args : EventData){
        let textfield = <TextField>args.object;
        var dialogs = require('ui/dialogs');
        dialogs.confirm("El texto cambio a :"+textfield.text)
                .then(function(){

                })
    }

    onReturn(args : EventData){
        let textfield = <TextField>args.object;
        var dialogs = require('ui/dialogs');
        dialogs.confirm("El texto tenia el valor de :"+textfield.text)
                .then(function(){

                })
    }
}