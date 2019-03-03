import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { FiltermusicComponent } from "./filtermusic/filtermusic.component";

const routes: Routes = [
    { path: "", redirectTo: "/filtermusic", pathMatch: "full" },
    { path: "filtermusic", component: FiltermusicComponent },
    { path: "items", component: ItemsComponent },
    { path: "items/:filter", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
