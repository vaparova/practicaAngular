import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica de Interpolación';

  constructor(){
    setTimeout( () => {
      this.title = this.title + ' - Modificar Imagen';
    },2000);
  }
}
