import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = 'Iron Man'
  public age  : number = 45;

  get CapitalizedName() :string {
    return this.name.toUpperCase();
  } 

  getHeroDescription() :string {
    return `${this.name} - ${this.age}  `
  }

  changeHero() : void{
    this.name = 'Spiderman'
  }

  changeAge() :void { 
      this.age = 25;  
  }

  resetForm() : void {
    this.name = 'Iron Man';
    this.age = 45;

    document.querySelectorAll('h1').forEach(element =>{
      element.innerHTML = '<h1> Desde Angular </h1>'
    })
  }
}
