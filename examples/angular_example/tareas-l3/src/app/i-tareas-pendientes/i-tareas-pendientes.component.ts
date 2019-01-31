import { Component, OnInit } from '@angular/core';
import { TareasDataService } from '../tareas-data.service';

@Component({
  selector: 't-i-tareas-pendientes',
  templateUrl: './i-tareas-pendientes.component.html',
  styleUrls: ['./i-tareas-pendientes.component.css']
})
export class ITareasPendientesComponent implements OnInit {

  tareas : Object[];

  constructor(private data: TareasDataService) { }

  ngOnInit() {
    this.tareas = this.data.tareas;
  }

}
