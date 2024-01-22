import { expect, Locator, Page, TestInfo } from "@playwright/test";

export class SearchResultsPage {

  readonly page: Page
  readonly wikipediaLink: Locator
  readonly firstAutomYearParragraf: Locator
  readonly wikipediaParragraf: Locator
 
  constructor(page: Page) {
    this.page = page;
    this.wikipediaLink = page.locator('//h3[normalize-space()=\'Automation\']');                              
    this.firstAutomYearParragraf = page.getByText('In 1771 Richard Arkwright')
  }

  async Open_Link_Wikipedia() {
    await this.wikipediaLink.click();
  }

  async Validate_Parragraf_Contains_Year(year: string, testInfo: TestInfo) {    
    await expect(this.firstAutomYearParragraf).toContainText(year);
    
    const screenshot = await this.page .screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    const screnshot2 = await this.firstAutomYearParragraf.screenshot({ path: 'screenshot.png' });
    await testInfo.attach('screnshot2', { body: screnshot2, contentType: 'image/png' });
  }

}