export class Angular2HeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-heroes-app h1')).getText();
  }
}
