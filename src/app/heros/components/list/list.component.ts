import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames : string[] = ['Spiderman' , 'Hulk' , 'Thor' , 'Iron Man'];
  public deletedHero? : string = '';

  removeLastHeroe() : void {
   
    this.deletedHero =   this.heroNames.pop();
    
  }

}
