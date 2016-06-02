import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise'; 

import { Hero } from '../shared';


@Injectable()
export class HeroService {
  private heroesApi = 'http://localhost:3000/heroes'; // URL to web api.
  
  constructor(private http: Http) {}
  
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesApi)
               .toPromise()
               .then(resp => resp.json())
               .catch(this.handleError);
  }
  
  getHero(id: number | string) {
    return this.getHeroes()
               .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  } 
  
  // Delete Hero
  delete(hero: Hero) {
    let headers = new Headers({'Content-type': 'application/json'});
    let url =  `${this.heroesApi}/${hero.id}`;
    
    return this.http.delete(url, headers)
                    .toPromise()
                    .catch(this.handleError);
  }

  // Combine the call th the private post and put methods in a single save method
  save(hero: Hero): Promise<Hero> {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }
  
  // Add new Hero
  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({'Content-Type': 'application/json'});
    
    return this.http.post(this.heroesApi, JSON.stringify(hero), {headers: headers})
                    .toPromise()
                    .then(resp => resp.json())
                    .catch(this.handleError);
  }
  // Update existing Hero
  private put(hero: Hero): Promise<Hero> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let url = `${this.heroesApi}/${hero.id}`;
    
    return this.http.put(url, JSON.stringify(hero), {headers: headers})
                    .toPromise()
                    .then(() => hero)
                    .catch(this.handleError);
  }
  
  private handleError(error: any) {
    console.log('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

