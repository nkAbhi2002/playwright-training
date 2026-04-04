import {chromium} from '@playwright/test';

async function globalSetup(){

    const browser=await chromium.launch();
    const context =await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole("textbox",{name:"Username"}).fill("Admin")
    await page.locator("[id='password']").fill("admin123");
    await page.getByRole("button",{name:"Login"}).click();
    await context.storageState({path:'state.json'})
    await browser.close();
}
export default globalSetup;