import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { TextField } from "tns-core-modules/ui/text-field";
import { Page } from "tns-core-modules/ui/page";
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";

import { Color } from 'tns-core-modules/color';
import { View } from 'tns-core-modules/ui/core/view';


@Component({
    selector: "ns-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})

export class LoginComponent{

    @ViewChild("container") container : ElementRef;

    busy    : Boolean;
    result  : string;

    constructor(
        private page :Page,
        private router: Router,
        private userService : UserService
    ){}

    login(){
        
        let username = this.page.getViewById<TextField>("usuario");
        let password = this.page.getViewById<TextField>("password");
        var usuario : User = new User();
        usuario.username = username.text.toLowerCase();
        usuario.password = password.text;

        if(this.userService.validateLogin(usuario)){
            this.router.navigate(['filtermusic']);
        }else{
            let container = <View>this.container.nativeElement;
            container.animate({
                backgroundColor: new Color("#FF0000"),
                duration:200
            });
            let dialogs = require('ui/dialogs');
            dialogs.confirm("Login incorrecto").then(function(){})
        }

    }

    clearAninmations(){
        let container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: new Color("#FFFFFF"),
            duration:200
        });
    }

    onBusyChange(args){
        let indicator = <ActivityIndicator>args.object;
        if(indicator.busy){
            this.result = "Activity indicator activado";
        }else{
            this.result = "Activity indeicator desactivado";
        }
        
    }
}