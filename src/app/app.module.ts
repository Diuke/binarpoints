import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgregarComponent } from './agregar/agregar.component';
import { QuitarComponent } from './quitar/quitar.component';
import { RedimirComponent } from './redimir/redimir.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    AgregarComponent,
    QuitarComponent,
    RedimirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
