import { Component } from '@angular/core';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Amigo';
  nombreUsuario = 'Camilo Rincón';
  edadUsuario = 37;

  titleClicked(){
    alert('Disparo - Event - Clic');
  }

  persona ={
    nombre : 'Andrés',
    edad   : 35,
    sexo   : 'M',
    salario : 10000000
  }
}
