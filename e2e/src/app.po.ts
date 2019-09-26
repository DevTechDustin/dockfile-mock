import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getHeadingText() {
    return element(by.css('app-root h3')).getText();
  }
  getNavbar() {
    return element(by.css('app-navbar h1'));
  }
}
