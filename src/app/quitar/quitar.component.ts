import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-quitar',
  templateUrl: './quitar.component.html',
  styleUrls: ['./quitar.component.css']
})
export class QuitarComponent implements OnInit {


  spinner;
  trabajadorId;
  listaMotivos;
  infoTrabajador;

  motivoFormControl;
  cantidadFormControl;

  error;

  constructor(private activeRoute: ActivatedRoute, private service: ServicesService) { }

  ngOnInit() {
    this.spinner = true;
    this.error = 2;
    this.motivoFormControl = new FormControl(null, Validators.required);
    this.cantidadFormControl = new FormControl(0, Validators.required);
    this.activeRoute.paramMap.subscribe(data => {
      this.trabajadorId = parseInt(data['params']['id']);
      console.log(this.trabajadorId);

      this.service.getTrabajador(this.trabajadorId).subscribe(data => {
        this.infoTrabajador = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
    });

    this.service.listaMotivos().subscribe(data => {
      this.listaMotivos = data;
      console.log(this.listaMotivos);
      this.filterMotivios();
    })
  }

  filterMotivios() {
    for (var i = 0; i < this.listaMotivos.length; i++) {
      if (this.listaMotivos[i].operation == 1 || this.listaMotivos[i].id == 8) {
        this.listaMotivos.splice(i, 1);
        i--;
      }
    }
    this.spinner = false;
  }

  reset(){
    this.motivoFormControl = new FormControl(null, Validators.required);
    this.cantidadFormControl = new FormControl(0, Validators.required);
  }

  agregar() {

    if(this.motivoFormControl.valid && this.cantidadFormControl.valid && this.cantidadFormControl.value > 0){
      this.service.agregarBinarPoints(this.trabajadorId, this.cantidadFormControl.value, this.motivoFormControl.value).subscribe(data => {
        this.reset();
        this.error = 0;
      }, error => {
        console.log(error);
        this.error = 1;
      });
    } else {
      console.log('invalido');
      this.error = 3;

    }
  }

}
