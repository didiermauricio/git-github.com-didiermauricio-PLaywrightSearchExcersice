
import { test, expect } from '@playwright/test';
test('Search_Word_In_Google', async ({ page }, testInfo) => {
    await page.goto('https://google.es/');
    
     if (await page.getByRole('button', { name: 'Aceptar todo' }).isVisible()){
          await page.getByRole('button', { name: 'Aceptar todo' }).click();
     }
    await expect(page).toHaveTitle(/Google/);
  
    await page.locator('//textarea[@id=\'APjFqb\']').click()
    await page.locator('//textarea[@id=\'APjFqb\']').fill('Automation wiki')
    await page.getByLabel('Buscar', { exact: true }).press("Enter")
    await page.getByRole('link', { name: 'Automation Wikipedia https://' }).click()
    await expect(page.getByText('In 1771 Richard Arkwright')).toContainText('1771')
      
    const screenshot = await page.screenshot();
    await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' });

    const screnshot2 = await page.getByText('In 1771 Richard Arkwright').screenshot({ path: 'screenshot.png' });
    await testInfo.attach('screnshot2', { body: screnshot2, contentType: 'image/png' });
    //close
  });