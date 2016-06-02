import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  
  constructor(
    private router: Router,
    private heroService: HeroService) {}
  
  getHeroes() {
    this.heroService.getHeroes().then( heroes => this.heroes = heroes);
  }
  
  gotoDetail() {
    this.router.navigate(['/hero', this.selectedHero.id]);
  }
  
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  
  
  ngOnInit() {
    this.getHeroes();
  }
  
  ngOnClick() {
    
  }
}
