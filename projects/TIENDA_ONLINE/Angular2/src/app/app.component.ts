import { Component } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login.component';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent {
  title = 'Inicio de Sesión';
}
