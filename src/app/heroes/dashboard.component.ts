import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  
  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  gotoDetail(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }
  
  ngOnInit() {
    this.heroService.getHeroes().then(heroes => {
        console.log(heroes);
        this.heroes = heroes.slice(1,5);
      }
    );
  }
}
