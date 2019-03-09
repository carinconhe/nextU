import { Component, OnInit } from "@angular/core";
import { Http } from '@angular/http';
import * as Dialogs from 'tns-core-modules/ui/dialogs';
import * as ApplicationSettings from 'tns-core-modules/application-settings';
import { map } from 'rxjs/operators';
import "rxjs/Rx";
import { Database } from '../services/database/database';

@Component({
    selector:"lista",
    moduleId: module.id,
    templateUrl: "./lista.component.html",
})

export class ListaComponent implements OnInit{
    public stocks : Array<any>;

    public constructor( private http:Http,
                        private database:Database){
                            this.stocks=[];
    }
    public ngOnInit(){
        let rows = this.database.getDatabase().executeQuery('stocks');
        for (let i = 0; i < rows.length; i++) {
            this.stocks.push(rows[i]);
        }
    }

    public addSimbolo(){
        let options ={
            title : 'Simbolo bursátil',
            okButtonText : 'Añadir',
            cancelButtonText :'Cancelar',
            inputType: Dialogs.inputType.text
        }
        Dialogs.prompt(options).then((result:Dialogs.PromptResult)=>{
            this.getQuote(result.text);
        })
    }

    public getQuote(simbolo: string) {
        this.http.get("http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=" + simbolo)
            .pipe(map(result => result.json()))
            .subscribe(result => {
                this.database.getDatabase().createDocument(result, result.Symbol);
                this.stocks.push(result);
            }, error => {
                console.log("ERROR: ", error);
            });
    }
}