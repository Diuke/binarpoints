import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lista;
  constructor(private service: ServicesService) { }

  ngOnInit() {
    this.service.fetchList().subscribe(data => {
      console.log(data);
      this.lista = data;
    });
  }

}
