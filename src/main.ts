import { bootstrap } from '@angular/platform-browser-dynamic';
// should be able to access these services from anywhere in the application
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { Angular2HeroesAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2HeroesAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);

