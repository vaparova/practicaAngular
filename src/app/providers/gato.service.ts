import { Injectable } from '@angular/core';
import { Gato } from '../models/gato';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  gatos: Gato[] = [
    {id:"3cm",url:"https://cdn2.thecatapi.com/images/3cm.jpg",width:612,height:612},
    {id:"7bd",url:"https://cdn2.thecatapi.com/images/7bd.gif",width:500,height:282},
    {id:"7kg",url:"https://cdn2.thecatapi.com/images/7kg.png",width:435,height:318},
    {id:"7ls",url:"https://cdn2.thecatapi.com/images/7ls.png",width:500,height:390},
    {id:"e1r",url:"https://cdn2.thecatapi.com/images/e1r.jpg",width:720,height:576},
    {id:"edd",url:"https://cdn2.thecatapi.com/images/edd.jpg",width:1024,height:672},
    {id:"efm",url:"https://cdn2.thecatapi.com/images/efm.gif",width:500,height:223},
    {id:"MTQ5MzcyNA",url:"https://cdn2.thecatapi.com/images/MTQ5MzcyNA.jpg",width:481,height:720},
    {id:"i-j1kCi3b",url:"https://cdn2.thecatapi.com/images/i-j1kCi3b.jpg",width:1280,height:720},
    {id:"StMwZZnDP",url:"https://cdn2.thecatapi.com/images/StMwZZnDP.jpg",width:1440,height:900}
  ];

  constructor() { }

  getGato(): Gato[]{
    return this.gatos;
  }
}
