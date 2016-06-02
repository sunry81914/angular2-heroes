import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OnActivate, Router, RouteSegment } from '@angular/router';

import { Hero, HeroService } from '../shared';


@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  providers: [HeroService]
})
export class HeroDetailComponent implements OnInit, OnActivate {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;  // true if navigated here
  
  private currSegment: RouteSegment;
  
  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}
  
  ngOnInit() {
    if (this.currSegment === undefined) {
      this.navigated = false;
      this.hero = new Hero();
    }
  }
  
  routerOnActivate(curr: RouteSegment){
      this.currSegment = curr;
      this.navigated = true;
      
      // convert parameter value to a number with the JavaScript (+) operator.
      let id = +curr.getParam('id');
      this.heroService.getHero(id).then(hero => this.hero = hero);
  }
   
  save() {
    this.heroService.save(this.hero)
                    .then(hero => {
                      this.hero = hero;  // saved hero, w/ id if new 
                      this.goBack(hero);
                    })
                    .catch(error => this.error = error); // TODO: Display error msg
  }
   
  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
  
}
