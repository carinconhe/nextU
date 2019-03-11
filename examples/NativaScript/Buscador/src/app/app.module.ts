import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { hipoUniversityService } from "./services/hipoUniversity.services";
import { geonamesService } from "./services/geonames.services";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BuscadorComponent } from "./buscador/buscador.component";

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
        AppRoutingModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        BuscadorComponent
    ],
    providers: [
        hipoUniversityService,
        geonamesService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
