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
    isVisibleSecForm:boolean    = false;
    textLabelCountry:string     = "";
    miUbicacion : Ubicacion     = {
        latitud     :0,
        longitud    :0
    }
    public search : string = null;

    items: any  =[{
        name        :"",
        country     :"",
        web_pages   :""
    }]
    
    itemsData:any = {any:[{
        countryId   :0,
        countryName :"",
        countryCode :""
        }]}

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
                    this.isVisibleSecForm=false;
                    this.search = textField.text;
                }, err =>{
                    console.error('Error',err);
                }
            );
    }

    buscarUniversidadPais(){
        let country     = this.itemsData.geonames[0].countryName;
        let searchFinal = this.search;
        this.datosUniversidades.country = country;
        this.datosUniversidades.search  = searchFinal;
        this.datosUniversidades.getDataCountry()
                                .subscribe(
                                    result =>  {
                                        this.items = result;
                                        this.isVisibleSecForm=false;
                                        this.search = searchFinal;
                                    }, err =>{
                                        console.error('Error',err);
                                    }
                                );
    }

    ubicarme(){
        this.permitirLocation();
        this.items = null;
        getCurrentLocation({desiredAccuracy:3})
            .then(location =>{
                this.miUbicacion ={
                    latitud     :location.latitude,
                    longitud    :location.longitude
                }
                this.datosGeonames.latitude     = this.miUbicacion.latitud.toString();
                this.datosGeonames.longitude    = this.miUbicacion.longitud.toString();
                this.datosGeonames.getData().subscribe(res =>  {
                        this.itemsData          = res;
                        this.textLabelCountry   = "Tu ubicación es :"+this.itemsData.geonames[0].countryName;
                        this.isVisibleSecForm   = true;
                    }, err =>{
                        console.error('Error',err);
                    }
                );
            }, err =>{
                console.log('Error',err.message);
            });
    }

    hideForm(){
        this.isVisibleSecForm=false;
    }

    permitirLocation(){
        if(!isEnabled()){
            enableLocationRequest();
        }
    }
}