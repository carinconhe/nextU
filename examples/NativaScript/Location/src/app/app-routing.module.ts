import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MapaComponent } from './mapa/mapa.component';


const routes: Routes = [
    { path: "", redirectTo: "/mapa", pathMatch: "full" },
    { path: "mapa", component:MapaComponent}, 
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
