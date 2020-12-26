import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { Cuerpo2Component } from './cuerpo2/cuerpo2.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'contact', component: ContactoComponent },
  { path: 'nosotros', component: CuerpoComponent},
  { path: '', component:Cuerpo2Component, pathMatch: 'full'},//La pagina por defecto si no la ruta es simple
  { path: '**', redirectTo:'nosotros', pathMatch: 'full'},//La pagina a donde ira si se pone una ruta desconocida

];

//servicios
import { EquipoService } from './equipo.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    EncabezadoComponent,
    CuerpoComponent,
    Cuerpo2Component,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
