import { Component } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnActivate {
  hero: Hero;
  
  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}
  
  gotoHeroes() {
    this.router.navigate(['/heroes']);
    // window.history.back();
  }
  
  routerOnActivate(curr: RouteSegment){
    // we convert the route parameter value to a number 
    //  with the JavaScript (+) operator.
    let id = +curr.getParam('id');
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }
}
