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
    return this.http.get(environment.routes.motivos, { headers: reqHeader });
  }

  listaTrabajadores() {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get(environment.routes.lista_trabajadores);
  }

  agregarBinarPoints(id, cantidad, motivo) {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    var data = {
      id_workers: id,
      id_motive: motivo,
      points: cantidad,
    }
    console.log(data);
    
    return this.http.post(environment.routes.agregar, data, { headers: reqHeader });
  }

  getTrabajador(id){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/json' });
    return this.http.get(environment.routes.infoTrabajador + id, { headers: reqHeader });
  }

  agregarMotivo(name, description, operation){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/json' });
    var data = {
      name: name,
      description: description,
      operation: operation
    }
    return this.http.post(environment.routes.crearMotivo, data, { headers: reqHeader });
  }

  actualizarMotivo(name, description, operation, id){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/json' });
    var data = {
      name: name,
      description: description,
      operation: operation
    }
    return this.http.post(environment.routes.actualizarMotivo + id, data, { headers: reqHeader });
  }

  historialUsuario(id){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Accept': 'application/json' });
    return this.http.get(environment.routes.historial + id, { headers: reqHeader });
  }

}
