import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { MotivosComponent } from './motivos/motivos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { QuitarComponent } from './quitar/quitar.component';
import { RedimirComponent } from './redimir/redimir.component';

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
    path: 'agregarBinarPoints',
    component: AgregarComponent
  },
  {
    path: 'quitarBinarPoints',
    component: QuitarComponent
  },
  {
    path: 'redimirBinarPoints',
    component: RedimirComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
