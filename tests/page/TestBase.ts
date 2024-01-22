import { expect, type Page } from "@playwright/test";

export class TestBase {
    readonly page: Page
    
    constructor(page: Page) {
        this.page = page;                       
    }
        
    async GoTo() {
      await this.page.goto('https://google.es/')
      if (await this.page.getByRole('button', { name: 'Aceptar todo' }).isVisible()){
        await this.page.getByRole('button', { name: 'Aceptar todo' }).click();   }
      await expect(this.page).toHaveTitle(/Google/);
    }
  }
  