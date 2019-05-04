import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private http: HttpClient) { }

  login(username, password) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
    var data = { username: username, password: password };
    console.log(data);

    return this.http.post(environment.routes.login, data, { headers: reqHeader });
  }

  fetchList() {
    return this.http.get(environment.routes.lista);
  }

  listaMotivos() {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get(environment.routes.motivos);
  }

}
