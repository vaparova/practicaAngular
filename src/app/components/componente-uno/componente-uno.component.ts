import { Component, Input, OnInit } from '@angular/core';
import { GatoService } from 'src/app/providers/gato.service';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent {

  arrGatosDB: any[] = [];
  errorBD = false;
  errorTxt = '';

  constructor(private gatoServ: GatoService) { 
  
    this.obtenerGatoDB().then( ()=>{
        
    });
  }

  obtenerGatoDB(): Promise<boolean> {
    return this.gatoServ.getBd2().then(()=>{
      this.arrGatosDB = this.gatoServ.getGatoBD();
      return true;
    }).catch( (err)=> {
      console.log('Salio por el catch', err);
      this.errorTxt = err;
      this.errorBD = true;
      return false;
    });
  }
  

}
