import { Component } from '@angular/core';
import { TextField } from "tns-core-modules/ui/text-field";
import { hipoUniversityService } from '../services/hipoUniversity.services';
import { geonamesService } from '../services/geonames.services';
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from 'nativescript-geolocation';
import { Ubicacion } from '../services/ubicacion';

@Component({
    selector: "buscador",
    moduleId: module.id,
    templateUrl: "./buscador.component.html",
    styleUrls: ["./buscador.component.css"]
})

export class BuscadorComponent {
    miUbicacion : Ubicacion = {
        latitud     :0,
        longitud    :0
    }

    items: any =[{
        name        :"",
        country     :"",
        web_pages   :""
    }]
    
    constructor(
        private datosUniversidades:hipoUniversityService,
        private datosGeonames:geonamesService
        ){ }

    buscarUniversidad(args){
        let textField = <TextField>args.object;
        this.datosUniversidades.search = textField.text
        this.datosUniversidades.getData()
            .subscribe(
                result =>  {
                    this.items = result;
                }, err =>{
                    console.error('Error',err);
                }
            );
    }

    ubicarme(){
        this.permitirLocation();
        getCurrentLocation({desiredAccuracy:3})
            .then(location =>{
                this.miUbicacion ={
                    latitud     :location.latitude,
                    longitud    :location.longitude
                }
                
                this.datosGeonames.latitude     = this.miUbicacion.latitud.toString();
                this.datosGeonames.longitude    = this.miUbicacion.longitud.toString();
                this.datosGeonames.getData()
                    .subscribe(
                        result =>  {
                            console.log(result);
                        }, err =>{
                            console.error('Error',err);
                        }
                    );
            }, err =>{
                console.log('Error',err.message);
            });
    }

    permitirLocation(){
        if(!isEnabled()){
            enableLocationRequest();
        }
    }
}