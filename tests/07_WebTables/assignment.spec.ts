import { test, expect } from '@playwright/test';
import dotenv from "dotenv";
dotenv.config();

test('Verify the terminated employee ', async ({ page }) => {

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.waitForTimeout(2000);
    await page.fill('input[name="username"]', process.env.ORANGE_USERNAME!);
    await page.fill('input[name="password"]', process.env.ORANGE_PASSWORD!);
    await page.waitForTimeout(1500);
    const sub = await page.locator(".orangehrm-login-button");
    sub.click();
    // await page.pause();
    let empStatus: string = "Terminated";
    let row;
    while (true) {
        // row = page.locator(".oxd-table-cell").filter({ hasText: empStatus }).first(); // this wont work
        row = page.locator("//div[@role='cell'][div[text()='Terminated']]").first(); // this is checking the exact value hence worked with xpath
        //xpath works with // properly in page.locator but in other it wont works.

        if (await row.count() > 0) {
            break;
        }
        const next = page.locator('.bi-chevron-right');
        if (await next.isDisabled()) throw new Error("Error - row not found");
        await next.click();
        await page.waitForTimeout(1000); 
    }
    // below 2 comments are erronous 
    // const firstName = await row.locator("//div[@role='cell'][div[text()='Terminated']]/preceding-sibling::div[3]").innerText();
    // const lastName = await row.locator("//div[@role='cell'][div[text()='Terminated']]/preceding-sibling::div[2]").innerText();
    // these are also not working
    // const firstName = await row.first().getByRole('cell').nth(2).innerText();
    // const lastName = await row.first().getByRole('cell').nth(3).innerText();
    // const firstName = await row.locator('.oxd-table-cell').nth(2).innerText();
    // const lastName = await row.locator('.oxd-table-cell').nth(3).innerText();
    const firstName = await row.locator("xpath=.//preceding-sibling::div[2]").innerText();
    const lastName = await row.locator("xpath=.//preceding-sibling::div[3]").innerText();
    console.log(firstName, lastName)
    await page.waitForTimeout(5000);
    



})