import {test,expect} from '@playwright/test'
import { loginCredentails} from '../test-data/loginCedentials';


test('valid login', async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByRole("textbox", {name:'Username'}).fill('Admin');
    await page.getByRole("textbox",{name:'Password'}).fill('admin123');
    await page.getByRole("button",{name:'Login'}).click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await page.context().storageState({ path: 'state.json' });
    


});