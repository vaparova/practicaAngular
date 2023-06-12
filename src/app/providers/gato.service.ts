import { Injectable } from '@angular/core';
import { Gato } from '../models/gato';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  gatos: any = [];
  gatosDB: any = [];

  constructor( private httpClient: HttpClient, private afs: AngularFireDatabase) {
    this.consumirGatos();
    this.getBd();
  }

  getGato(): Gato[]{
    return this.gatos;
  }

  getGatoBD(): Gato[]{
    return this.gatosDB;
  }

  consumirGatos() {
    this.httpClient.get('https://api.thecatapi.com/v1/images/search?limit=10').subscribe((data) => {
    Array(data).forEach((gato: any) => {
      gato.forEach((cat:any) => {
        let g = new Gato(cat.id, cat.url, cat.width, cat.height);
        this.gatos.push(g);
      });
    }); 
    });
  }

  getBd(){
    this.afs.object("gatito/").snapshotChanges().subscribe( (data)=>{
      console.log(data.payload.val());
      this.gatosDB = data.payload.val();
    } );
  }


}
