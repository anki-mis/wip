import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { CommonModule } from '@angular/common';
import { HeroService } from './hero.service';
import { ShapesComponent } from '../../utils/shapes/shapes.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, ShapesComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  
  heroes: Hero[] = [];
  private _shape: string = "";

  constructor(private heroService: HeroService) { }

  @Input() shapeType:string = 'circle';

  public get shape() {
    return this._shape;
  }

  public set shape(value: string) {
    console.log('shape setter called');
    console.log('shape - ', this.shape);
    this._shape = value;
  }

  public test() {
    console.log('testing');
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    console.log('shape - ', this.shape);
    this.getHeroes();

    function* gen(): any {
      let counter: any = 0;
      while (true) {
        console.log('Inside gen function - counter - ', ++counter);
        const value = yield;
        console.log('value - ', value);
      }
    }
    
    const g = gen();
    g.next(1); // Returns { value: undefined, done: false }
    // No log at this step: the first value sent through `next` is lost
    g.next(2); // Returns { value: undefined, done: false }
    // Logs 2
    g.next(3); // Returns { value: undefined, done: false }
    g.next(4);
  }

 
}
