import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { MotivosComponent } from './motivos/motivos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { QuitarComponent } from './quitar/quitar.component';
import { RedimirComponent } from './redimir/redimir.component';
import { RedirectorComponent } from './redirector/redirector.component';
import { HistorialComponent } from './historial/historial.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'agregarMotivo',
    component: MotivosComponent
  },
  {
    path: 'agregarBinarPoints/:id',
    component: AgregarComponent
  },
  {
    path: 'quitarBinarPoints/:id',
    component: QuitarComponent
  },
  {
    path: 'redimirBinarPoints/:id',
    component: RedimirComponent
  },
  {
    path: 'redirector',
    component: RedirectorComponent
  },
  {
    path: 'historial/:id',
    component: HistorialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
