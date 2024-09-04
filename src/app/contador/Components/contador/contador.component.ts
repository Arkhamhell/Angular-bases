import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
 template: `
 <h3>contador: {{counter}}</h3>
 <button (click)="increaseBy(+1)">+1</button>
 <button (click)="resetCounter()">Reset</button>
 <button (click)="increaseBy(-1)" >-1</button>`
 
})
export class ContadorComponent {
  public counter : number = 10;

  increaseBy(value : number): void{
    this.counter += value;
  }
  
  resetCounter(){
    this.counter = 10;
  }
  
}
