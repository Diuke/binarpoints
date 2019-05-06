import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-motivos',
  templateUrl: './motivos.component.html',
  styleUrls: ['./motivos.component.css']
})
export class MotivosComponent implements OnInit {

  nombreFormControls;
  descripcionFormControls;
  operationFormControls;
  lista;
  tempid;
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.tempid = 0;
    this.nombreFormControls = {};
    this.descripcionFormControls = {};
    this.operationFormControls = {};
    this.service.listaMotivos().subscribe(data => {
      console.log(data);
      this.lista = data;
      this.lista.forEach(element => {
        this.nombreFormControls[element.id] = new FormControl(element.name);
        this.descripcionFormControls[element.id] = new FormControl(element.description);
        this.operationFormControls[element.id] = new FormControl(element.operation);
      });
    });
  }

  agregarMotivo(){
    var id = 'temp'+this.tempid;
    this.lista.unshift({
      description: "",
      id: id,
      name: "",
      operation: 1
    })
    this.nombreFormControls[id] = new FormControl("");
    this.descripcionFormControls[id] = new FormControl("");
    this.operationFormControls[id] = new FormControl(1);
  }

  actualizar(index){
    
  }

  quitar(index){
    
  }

}
