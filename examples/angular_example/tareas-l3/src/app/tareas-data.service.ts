import { Injectable } from '@angular/core';

@Injectable()
export class TareasDataService {
  grupos : Object[];
  tareas : {titulo: string, descripcion : string, fecha : string, grupo : string}[];
  constructor() {
    this.grupos = [
      {
        nombre: 'Trabajo',
        icono: 'business_center',
        resaltado: false
      },
      {
        nombre: 'Amigos',
        icono: 'people',
        resaltado: false
      },
      {
        nombre: 'Universidad',
        icono: 'school',
        resaltado: false
      }
    ];

    this.tareas = [
      {
        titulo: 'Recoger libros',
        descripcion: 'Ir a la biblioteca principal, y recoger los libros que Juan dejó para mi',
        fecha: '2017-01-25',
        grupo: 'Universidad'
      },
      {
        titulo: 'Firmar autorización',
        descripcion: 'Revisar el documento para el pedido de esta semana y firmarlo para que se realice',
        fecha: '2018-09-30',
        grupo: 'Trabajo'
      },
      {
        titulo: 'Cita con María',
        descripcion: 'Recogerla en su departamento a las 8:00 pm para ir a cenar',
        fecha: '2018-09-29',
        grupo: 'Amigos'
      }
    ];
  }
  getTareasHoy(){
    let tareasHoy : Object[] = [];
    let hoy = this.getFechaHoy();
    this.tareas.forEach(element => {
      if (element.fecha == hoy) {
        tareasHoy.push(element);
      }

    });
    return tareasHoy;
  }

  getFechaHoy(){
    let hoy = new Date();
    let anio, mes, dia;
    if(hoy.getDate()<10){
      dia = '0'+hoy.getDate()
    }else dia = hoy.getDate();
    if ((hoy.getMonth()+1)<10) {
      mes = '0'+(hoy.getMonth()+1);
    }else mes = (hoy.getMonth()+1);
    anio = hoy.getFullYear();
    return anio+'-'+mes+'-'+dia
  }


  getTareasGrupo(grupo){
    let tareasGrupo : Object[] = [];
    this.tareas.forEach(element => {
      if(element.grupo == grupo){
        tareasGrupo.push(element);
      }
    })
    return tareasGrupo;
  }
}
