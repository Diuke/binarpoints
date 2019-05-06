import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lista_trabajadores;
  spinner;
  isLogged;
  
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.spinner = true;

    this.isLogged = localStorage.getItem('token') != null;

    this.service.listaTrabajadores().subscribe(data => {
      console.log(data);

      this.lista_trabajadores = data;
      this.spinner = false;

    }, error => {
      console.log(error);

    });
  }

}
