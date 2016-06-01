import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2HeroesAppComponent } from '../app/angular2-heroes.component';

beforeEachProviders(() => [Angular2HeroesAppComponent]);

describe('App: Angular2Heroes', () => {
  it('should create the app',
      inject([Angular2HeroesAppComponent], (app: Angular2HeroesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-heroes works!\'',
      inject([Angular2HeroesAppComponent], (app: Angular2HeroesAppComponent) => {
    expect(app.title).toEqual('angular2-heroes works!');
  }));
});
