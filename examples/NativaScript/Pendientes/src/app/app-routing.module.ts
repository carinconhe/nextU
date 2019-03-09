import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ListaComponent } from "./lista/lista.component";

const routes: Routes = [
    { path: "", redirectTo: "/pendientes", pathMatch: "full" },
    { path: "pendientes", component: ListaComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
