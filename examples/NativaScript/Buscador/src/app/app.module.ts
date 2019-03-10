import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { hipoUniversityService } from "./services/hipoUniversity.services";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BuscadorComponent } from "./buscador/buscador.component";

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
        hipoUniversityService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
