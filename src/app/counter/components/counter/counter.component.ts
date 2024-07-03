import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>
<hr>
<h3>{{counter}}</h3>
<button (click)="increasyBy('inc')">+</button>
<button (click)="reset()">Reset</button> 
<button (click)="increasyBy('dec')">-</button>   
    `

})

export class CounterComponent {
    constructor() { }
    public title: string = 'Hola Mundo';
    public counter: number  = 10;
  
    increasyBy(value: string ):void{
      if(value=='inc'){
          this.counter += 1;
      }
      else
      {
        this.counter -=1;
      }
    }
  
    reset():void{
      this.counter= 10;
    }
}