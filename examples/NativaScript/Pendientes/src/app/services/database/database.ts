import {Injectable} from '@angular/core';
import {Couchbase} from 'nativescript-couchbase';

@Injectable()
export class Database {
    private storage : any;
    private instanciado : boolean;

    public constructor(){
        if(!this.instanciado){
            this.storage = new Couchbase('Lista-pendientes');
            this.storage.createView('pendientes','1',(document,emitter)=>{
                emitter.emit(document._id,document);
            });
            this.instanciado = true;
        }
    }

    public getDatabase(){
        return this.storage;
    }
}