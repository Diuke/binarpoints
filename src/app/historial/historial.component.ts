import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  constructor(private services: ServicesService, private activeRoute: ActivatedRoute) { }

  listaHistorial;
  trabajadorId;
  page;
  infoTrabajador
  totalElements;

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(data => {
      console.log(data);
      this.page = 1
      this.trabajadorId = parseInt(data['params']['id']);
      
      this.services.getTrabajador(this.trabajadorId).subscribe(data => {
        this.infoTrabajador = data;
        console.log(data);
      }, error => {
        console.log(error);
      });

      this.getPage(1);
    }, error => {
      console.log(error);
    });

  }

  getPage(event){
    this.page = event;
    this.services.historialUsuario(this.trabajadorId + '&page=' + event).subscribe(data => {
      console.log(data);
      this.totalElements = data['total'];
      this.listaHistorial = data['data'];
    });
  }

}
