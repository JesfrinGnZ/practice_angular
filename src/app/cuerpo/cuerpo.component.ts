import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../equipo.service';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  equipo:any[]=[];

  constructor(private _servicio:EquipoService) { 
    this.equipo = _servicio.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}
