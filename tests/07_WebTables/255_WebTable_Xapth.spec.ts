import { test, expect } from "@playwright/test";

test('verify element by filter ', async({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/webtable');
    await page.locator("//td[text() = 'Priya.Nair']").click();
    await page.locator("//td[text() = 'Priya.Nair']/preceding-sibling::td/input[@type='checkbox']").click();

    // psuedo class
    await page.locator("tr:has(td:text('Rohan.Mehta'))").locator("td").first().click();

    await page.waitForTimeout(5000);
})