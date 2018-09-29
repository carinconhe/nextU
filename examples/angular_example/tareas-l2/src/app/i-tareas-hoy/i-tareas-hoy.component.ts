import { Component, OnInit } from '@angular/core';

@Component({
  selector: 't-i-tareas-hoy',
  templateUrl: './i-tareas-hoy.component.html',
  styleUrls: ['./i-tareas-hoy.component.css']
})
export class ITareasHoyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tareasHoy = ['Firma autorización'];
  title     = 'Tareas para Hoy';
}
