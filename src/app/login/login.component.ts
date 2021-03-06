import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: FormControl;
  password: FormControl;
  

  constructor(private service: ServicesService, private router: Router, private location: Location) { }



  ngOnInit() {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }

  send(){
    this.service.login(this.email.value, this.password.value).subscribe(data => {
      console.log(data);
      localStorage.setItem('token', data['access_token']);
      //this.router.navigate(['']);
      window.location.assign('');
    });
  }

}
