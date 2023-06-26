import { Component, OnInit, NgModule } from '@angular/core';
import { Gato } from '../../models/gato';
import { GatoService } from 'src/app/providers/gato.service';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.css']
})
export class ComponenteDosComponent  {
  // url = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key='
  // key = 'live_ssY9l2168QNh0FjlJVVmj4Nw23DQrgWzKCxLTfG96yi96UaVcsuPusbkVCNlcj9A';
  // gato: Gato;
  arrGatos: Gato[] = [];
  arrGatosDB: any[] = [];
  errorBD = false;
  errorTxt = '';


  constructor(private gatoServ: GatoService) {

    this.obtenerGatoApi().then( ()=>{
      this.mostrarGatos(0,3); // de esta forma evitamos el setTimeOut()
    }).catch( ()=>{
      // codigo de manejo error api
    });

    // MIGRADO A FUNC obtenerGatoDB()

    // this.gatoServ.getBd2().then(()=>{
    //   console.log('Salio por el then');
    //   const a = this.gatoServ.getGatoBD();
    //   this.arrGatosDB.push(a);
    // }).catch( (err)=> {
    //   console.log('Salio por el catch');
    //   this.errorTxt = err;
    //   this.errorBD = true;

    // });

    this.obtenerGatoDB().then( ()=>{
      
    });

   }

  // C O N E X I O N   G A T O   S E R V I C E

  obtenerGatoApi(): Promise<boolean>{
    return this.gatoServ.getGatoApi().then( ()=>{
      this.arrGatos = this.gatoServ.getGato();
      return true;
    }).catch( ()=> {
      return false;
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

  // setGatoDB(){
  //   this.gatoServ.setGatoBD(this.arrGatos).then(()=>{
  //     console.log('carga en BD exitosa!');
  //   }).catch( ()=> {
  //     console.log('error al cargar datos en BD!');
  //   });
  // }


  // F U N C I O N E S   C O M P O N E N T E

  mostrarGatos(i: number, max: number){
    this.arrGatos.forEach( (gato, index: number)=>{
      if( index >= i && index <= max ){
        gato.visible = true;
      }else{
        gato.visible = false;
      }
    });
  }

  guardarGato(id: string){
  this.arrGatos.forEach(gato =>{
    if(gato.id == id){
      this.arrGatosDB.push(gato);
    }
  });
  this.gatoServ.setGatoBD(this.arrGatosDB).then( ()=> {
    console.log('carga exitosa!');
  }).catch( ()=> {
    console.log('error en carga bd');
  });
  console.log(this.arrGatosDB);    

  }

 

}
