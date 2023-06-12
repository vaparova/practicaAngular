import { Component, OnInit, NgModule } from '@angular/core';
import { Gato } from '../../models/gato';
import { HttpClient } from '@angular/common/http'
import { GatoService } from 'src/app/providers/gato.service';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent  {
  url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key='
  key = 'live_ssY9l2168QNh0FjlJVVmj4Nw23DQrgWzKCxLTfG96yi96UaVcsuPusbkVCNlcj9A';
  gato: Gato;
  arrGatos: Gato[] = [];
  arrGatosDB: any[] = [];
  errorBD = false;
  errorTxt = '';
  

  constructor(private gatoServ: GatoService) {
    this.gato = new Gato('12k',
    'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page='
    ,250, 250);

    this.arrGatos = this.gatoServ.getGato(); // trae gatos de la api
    this.gatoServ.getBd().then(()=>{

      console.log('Salio por el then');
      const a = this.gatoServ.getGatoBD();
      this.arrGatosDB.push(a);
    }).catch( (err)=> {
      console.log('Salio por el catch');
      this.errorTxt = err;
      this.errorBD = true;

    }); // trae gatos de la bd

    console.log(this.gatoServ.getGatoBD());
    
    setTimeout( ()=> {
      this.mostrarGatos(0, 3); // 0 - 3 / 4 - 7 / 8 - 9
    },2000);
    console.log(this.arrGatos);
   }

  mostrarGatos(i: number, max: number){
    console.log(i);
    this.arrGatos.forEach( (gato, index: number)=>{
      console.log(i);
      if( index >= i && index <= max ){
        gato.visible = true;
      }else{
        gato.visible = false;
      }
    });
  }

  cambiarGato(){
    this.gato.url = this.gato.url + 1;
  }

}
