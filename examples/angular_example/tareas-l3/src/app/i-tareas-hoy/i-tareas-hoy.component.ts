import { Component, OnInit } from '@angular/core';
import { TareasDataService } from '../tareas-data.service';

@Component({
  selector: 't-i-tareas-hoy',
  templateUrl: './i-tareas-hoy.component.html',
  styleUrls: ['./i-tareas-hoy.component.css']
})
export class ITareasHoyComponent implements OnInit {

  tareasHoy : Object[];

  constructor(private data :TareasDataService) { }

  ngOnInit() {
    this.tareasHoy = this.data.getTareasHoy();
  }

}
