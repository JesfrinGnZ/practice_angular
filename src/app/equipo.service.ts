import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[]=[
    {
      nombre:'Ignacio',
      especialidad:'HTML',
      descripcion:'descripcion '
    },
    {
      nombre:'Maria',
      especialidad:'CSS',
      descripcion:'descripcion 2'
    }

  ]

  constructor() {
    console.log('Servicion funcionando')
   }

   obtenerEquipo(){
     return this.equipo;
   }
}
