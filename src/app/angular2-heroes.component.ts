import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { DashboardComponent } from './heroes/dashboard.component';

@Component({
  moduleId: module.id,
  selector: 'angular2-heroes-app',
  templateUrl: 'angular2-heroes.component.html',
  styleUrls: ['angular2-heroes.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: []
})
@Routes([
  { path: '/heroes', component: HeroesComponent },
  { path: '/hero/:id', component: HeroDetailComponent },
  { path: '/dashboard', component: DashboardComponent },
  { path: '*', component: HeroesComponent }
])
export class Angular2HeroesAppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/dashboard']);
  }
}
