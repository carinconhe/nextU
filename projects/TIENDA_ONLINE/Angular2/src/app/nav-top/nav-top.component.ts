import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 't-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css']
})
export class NavTopComponent implements OnInit {
  private   toggle : boolean = false;
  constructor(private httpService : HttpService){ }

  ngOnInit() {
    this.toggle = this.httpService.getToggle();
  }

}
