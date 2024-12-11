import { Component } from '@angular/core';
import { UnServicioService } from './services/un-servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(public unServicioService:UnServicioService){}

  ngOnInit(): void {
    this.unServicioService.data;

  }
}
