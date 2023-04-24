import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola Mundo!!!!';

  constructor(){
    setTimeout( () => {
      this.title = "hola de nuevo!!!";
    },2000);
  }
}
