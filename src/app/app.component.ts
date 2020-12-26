import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master aplicacion';
  show:boolean = true;
  cursos:string[]=['html','angular','pphp'];
  animales:Array<any> =[
    {tipo:'Perro',nombre:'Lisa',edad:10},
    {tipo:'Gato',nombre:'Pepon',edad:2},
    
  ];
}
