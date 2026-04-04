import {test,expect} from '@playwright/test'

test.describe("Inventory Feature",async()=>{
    test("Check search ",async ({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
       await page.getByRole('link', { name: 'Admin' }).click();

  const username = page.locator('.oxd-input-group:has-text("Username") input');

  await username.click();
  await page.keyboard.type('Admin');

  await page.getByRole('button', { name: 'Search' }).click();

  await expect(page.locator('.oxd-table')).toBeVisible();
})
});
