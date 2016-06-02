import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService } from '../shared';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;
  
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
    this.addingHero = false;
  }
  
  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }
  
  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService.delete(hero)
                    .then(resp => {
                      this.heroes = this.heroes.filter(h => h !== hero);
                      if (this.selectedHero === hero) {
                        this.selectedHero = null;
                      }
                    })
                    .catch(error => this.error = error); // TODO: Display error msg.
  }
  
  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  } 
  
  ngOnInit() {
    this.getHeroes();
  }
}
