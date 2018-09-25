import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-i-tareas-pendientes',
  templateUrl: './i-tareas-pendientes.component.html',
  styleUrls: ['./i-tareas-pendientes.component.css']
})
export class ITareasPendientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tareas = ['Recoger libros','Cita con Mónica','Firma de Autorización','Llenar horas en Admition'];
}
