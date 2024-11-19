import { Component } from '@angular/core';

@Component({
  selector: 'app-heros-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHero:boolean = false;
  public nameHeroDeleted?: string;

  public heroName: string[] = [
    'Spiderman', 'Thor', 'Capitan América', 'Hulk', 'BlackWidow'
  ];



  removeLastHero(): void {
    this.deletedHero = true;
    const nameHeroe = this.heroName.pop();
    this.nameHeroDeleted = nameHeroe;
  }

}
