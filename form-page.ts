// agoda-home-page.ts
import type { Page } from 'playwright';

export class FormPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  username = `xpath=//li[@data-element-name='all-rooms-tab']`;
  PrivateStay= `xpath=//li[@data-element-name='home']`;
  Package= `xpath=//li[@data-element-name='packages-tab']`;
  Flight= `xpath=//li[@data-element-name='flight-tab']`;


  async goto() {
    await this.page.goto('https://form-validation-aleph-tav.vercel.app/');
  }

  async takeScreenShot(file) {
    await this.page.screenshot({ path: file });
  }

  async fillUpForm(username, age, residency, accounts, nationality) {
 
    await this.page.fill('data-testid=username-input', username);
    await this.page.fill('data-testid=age-input', age);
    await this.page.click('data-testid=acctype-input-01');
    await this.page.selectOption('id=nationality', {value: '5'});
    await this.page.click('data-testid=submit');
  }

  
}