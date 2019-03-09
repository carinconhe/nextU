import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MapaComponent } from './mapa/mapa.component';

import * as platform from 'tns-core-modules/platform';
declare var GMSServices: any;
if(platform.isIOS){
    GMSServices.provideAPIKey("AIzaSyCLm4vBW2lwQDSaY4f15zLp2Q13Dak2Hck");
}

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        MapaComponent
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
