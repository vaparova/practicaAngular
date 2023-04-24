import { Component, OnInit, NgModule } from '@angular/core';
import { Gato } from '../../models/gato';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent implements OnInit {
  
  gato: Gato;

  constructor() {
    this.gato = new Gato('12k',
    'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page='
    ,250, 250);
   }

  ngOnInit(): void {
  
  }

  cambiarGato(){
    this.gato.url = this.gato.url + 1;
  }

}
