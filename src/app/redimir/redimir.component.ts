import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services/services.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-redimir',
  templateUrl: './redimir.component.html',
  styleUrls: ['./redimir.component.css']
})
export class RedimirComponent implements OnInit {

  spinner;
  trabajadorId;
  listaMotivos;
  infoTrabajador;

  cantidadFormControl;

  motivo = 8;
  error;

  constructor(private activeRoute: ActivatedRoute, private service: ServicesService) { }

  ngOnInit() {
    this.spinner = true;
    this.error = 2;
    this.cantidadFormControl = new FormControl(0, Validators.required);
    this.activeRoute.paramMap.subscribe(data => {
      this.trabajadorId = parseInt(data['params']['id']);
      console.log(this.trabajadorId);
      this.updateInfo();
      
    });
    
  }

  updateInfo(){
    this.service.getTrabajador(this.trabajadorId).subscribe(data => {
      this.infoTrabajador = data;
      console.log(data);
      this.spinner = false;
    }, error => {
      console.log(error);
    });
  }

  resetForm(){
    this.cantidadFormControl = new FormControl(0, Validators.required);
  }
  

  redimir(){
    
    if(this.cantidadFormControl.value > 0){
      console.log(this.cantidadFormControl.value);
      
      if(this.infoTrabajador.binar_points - this.cantidadFormControl.value >= 0){
        this.service.agregarBinarPoints(this.trabajadorId, this.cantidadFormControl.value, this.motivo).subscribe(data => {
          this.resetForm();
          this.updateInfo();
          this.error = 0;
        }, error => {
          this.error = 1;
        });
      } else {
        this.error = 4;
      }
    } else {
      this.error = 3;
      
    }
  }


}
