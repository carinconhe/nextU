import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example for pipes';
  varMessage = 'Texto en mayusculas';
  fecha = new Date();
  numero1 = 20;
}
