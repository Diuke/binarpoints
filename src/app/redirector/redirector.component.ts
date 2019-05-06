import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirector',
  templateUrl: './redirector.component.html',
  styleUrls: ['./redirector.component.css']
})
export class RedirectorComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    console.log(localStorage.getItem('token') == null);
    if(localStorage.getItem('token') != null){
      this.router.navigate(['']);
    } else {
      this.router.navigate(['login'])
    }

  }

}
