import { test, expect } from "@playwright/test"
import { loginCredentails, invalidCredentails } from "../test-data/loginCedentials"

test.describe("Login Feature", async () => {
    for (const credentails of loginCredentails) {
        test(`Login with valid credentials with username ${credentails.username} and password ${credentails.password}`, async ({ page }) => {
            //AAA
            //Arrange
            //testfile
            //db
            //api
            let username = credentails.username
            let password = credentails.password

            //Act
            await page.goto("")
            await page.getByRole("textbox", { name: "Username" }).fill(username)
            await page.locator("[id='password']").fill(password)
            await page.getByRole("button", { name: "Login" }).click()
            //Assert
            await expect(page.getByText("Products")).toBeVisible()
        })
    }
    test("@Test1 Login with Locked User", async ({ page }) => {
        let username = "locked_out_user"
        let password = "secret_sauce"
        await page.goto("")
        await page.getByRole("textbox", { name: "Username" }).fill(username)
        await page.locator("[id='password']").fill(password)
        await page.getByRole("button", { name: "Login" }).click()
        await expect(page.getByText("Epic sadface: Sorry, this user has been locked out.")).toBeVisible()

    })
    test("Login with invalid credentials", async ({ page }) => {
    })
})


