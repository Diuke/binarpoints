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
  error;
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.tempid = 0;
    this.nombreFormControls = {};
    this.descripcionFormControls = {};
    this.operationFormControls = {};
    this.fetchMotivos();
  }

  fetchMotivos(){
    this.error = {}
    this.service.listaMotivos().subscribe(data => {
      console.log(data);
      this.lista = data;
      this.lista.forEach(element => {
        this.error[element.id] = 2;
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

  updateCreate(index){
    this.error = 2;
    var id = this.lista[index].id
    if(id.toString().includes('temp')){
      this.service.agregarMotivo(this.nombreFormControls[id].value, this.descripcionFormControls[id].value, this.operationFormControls[id].value).
      subscribe(data => {
        window.scroll(0,0);
        this.fetchMotivos();
        this.error = 0;
      }, error => {
        window.scroll(0,0);
        console.log(error);      
        this.error = 1;  
      });
    } else {
      this.service.actualizarMotivo(this.nombreFormControls[id].value, this.descripcionFormControls[id].value, this.operationFormControls[id].value, id)
      .subscribe(data => {
        window.scroll(0,0);
        this.fetchMotivos();
        this.error = 0;
      }, error => {
        window.scroll(0,0);
        console.log(error);
        this.error = 1;
      });
    }
  }

}
