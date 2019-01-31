import { Component, OnInit } from '@angular/core';
import { TareasDataService } from '../tareas-data.service';

@Component({
  selector: 't-i-tareas-grupos',
  templateUrl: './i-tareas-grupos.component.html',
  styleUrls: ['./i-tareas-grupos.component.css']
})
export class ITareasGruposComponent implements OnInit {

  grupos : Object[];


  constructor(private data:TareasDataService) { }

  ngOnInit() {
    this.grupos = this.data.grupos;
  }

  onHoverGroupIn(item){
    item.resaltado = true;
  }

  onHoverGroupOut(item){
    item.resaltado = false;
  }

}
