import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { BuscadorComponent } from "./buscador/buscador.component";

const routes: Routes = [
    { path: "", redirectTo: "/buscador", pathMatch: "full" },
    { path: "buscador", component: BuscadorComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
