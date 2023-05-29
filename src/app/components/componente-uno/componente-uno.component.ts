import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit {
  @Input() url: any ='';

  constructor() { 
    console.log(this.url);
  }

  ngOnInit(): void {
  }

}
