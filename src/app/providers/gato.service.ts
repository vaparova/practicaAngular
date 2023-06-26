import { Injectable } from '@angular/core';
import { Gato } from '../models/gato';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { catchError, throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  gatos: any = [];
  gatosDB: any = [];

  constructor( private httpClient: HttpClient, private afs: AngularFireDatabase) {
    // this.consumirGatos();
    // this.getGatoApi().then( ()=>{
    //   console.log('getApi ok!');
    // }).catch( ()=> {
    //   console.log('getApi Err!');
    // });
  }

  //  F U N C I O N E S   D E   A R R A Y S

  getGato(): Gato[]{
    return this.gatos;
  }

  getGatoBD(): Gato[]{
    return this.gatosDB;
  }

  setGatoBD(arrGatos: Gato[]): Promise<boolean>{
    this.gatosDB = arrGatos;
    return this.setBd();
  }

  //  C O N E X I O N E S   E X T E R N A S

  getGatoApi(){
    return new Promise( (resolve, reject) =>{
      this.httpClient.get('https://api.thecatapi.com/v1/images/search?limit=10').subscribe((data) => {
        Array(data).forEach((gato: any) => {
          console.log(gato);
          if(gato){
            gato.forEach((cat:any) => {
              let g = new Gato(cat.id, cat.url, cat.width, cat.height);
              resolve (this.gatos.push(g));
            });
          }else{
            reject(new Error('Error en BD!!'));
          }
        });
      });
    });
  }

  getBd2(){
    return new Promise((resolve, reject)=>{
      const conexion = this.afs.object("gatito/").snapshotChanges();
      conexion.pipe(
        catchError((err): any => {
          reject(new Error ('esto es un error' + err ));
        })
      ).subscribe( (data: any) =>{
        console.log(data.payload.val());
        if(data.payload.exists()){
          resolve(this.gatosDB = data.payload.val());
        }else{
          reject(new Error('Error en BD!!'));
        }
      }
      );
    });
  }

  setBd(): Promise<boolean>{
    return this.afs.object('gatito/').set(this.gatosDB).then( ()=> {
      return true;
    }).catch( ()=> {
      return false;
    });
  }


  // consumirGatos() {
  //   this.httpClient.get('https://api.thecatapi.com/v1/images/search?limit=10').subscribe((data) => {
  //     Array(data).forEach((gato: any) => {
  //       gato.forEach((cat:any) => {
  //         let g = new Gato(cat.id, cat.url, cat.width, cat.height);
  //         this.gatos.push(g);
  //       });
  //     });
  //   });
  // }


  // getBd(){
  //   return new Promise((resolve, reject)=>{
  //    this.afs.object("gatito/").snapshotChanges().subscribe( (data)=>{
  //       console.log(data);
  //       if(data.payload.exists()){
  //         resolve(this.gatosDB = data.payload.val());
  //       }else{
  //         console.log('error en BD!');
  //         reject(new Error('Error en BD!!'));
  //       }

  //     } );
  //   });

  // }

}
