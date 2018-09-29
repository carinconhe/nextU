import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareasDataService } from '../tareas-data.service';

@Component({
  selector: 't-ver-grupo',
  templateUrl: './ver-grupo.component.html',
  styleUrls: ['./ver-grupo.component.css']
})
export class VerGrupoComponent implements OnInit {
  nombreGrupo : String;
  tareas : Object[];
  constructor(private activatedRoute : ActivatedRoute,private data : TareasDataService) {
    this.nombreGrupo = this.activatedRoute.snapshot.params['nombre'];

  }

  ngOnInit() {
    this.tareas       = this.data.getTareasGrupo(this.nombreGrupo);
  }

}
