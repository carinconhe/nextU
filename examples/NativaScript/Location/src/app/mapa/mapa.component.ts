import { Component, OnInit } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';
import { isEnabled, enableLocationRequest, getCurrentLocation, watchLocation, distance, clearWatch } from 'nativescript-geolocation';
import { Ubicacion } from './ubicacion';

registerElement('MapView', ()=> MapView);

@Component({
    selector: 'mapa',
    moduleId: module.id,
    templateUrl: './mapa.component.html'
})

export class MapaComponent implements OnInit{
    miUbicacion : Ubicacion = {
        latitud     :0,
        longitud    :0,
        zoom        :0,
        bearing     :0,
        tilt        :0,
        padding     :[40,40,40,40]
    }

    mapView :MapView;

    constructor(){
        
    }
    ngOnInit(){
        this.permitirLocation();
    }

    onMapReady(event){
        console.log('Mapa listo');
        this.mapView = event.object;
    }

    ubicarme(){
        getCurrentLocation({desiredAccuracy:3})
            .then(location =>{
                this.miUbicacion ={
                    latitud     :location.latitude,
                    longitud    :location.longitude,
                    zoom        :14,
                    bearing     :0,
                    tilt        :0,
                    padding     :[40,40,40,40]
                }
                let marker      = new Marker();
                marker.position = Position.positionFromLatLng(this.miUbicacion.latitud,this.miUbicacion.longitud);
                marker.title    = "Mi ubicacion";
                marker.userData = {index:1}
                this.mapView.addMarker(marker);
                console.log(this.miUbicacion.latitud,this.miUbicacion.longitud);
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