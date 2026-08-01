import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Right Click', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/context-menu');
    // mouse right click
    await page.locator('span.context-menu-one').first().click({ button: 'right'}); 

    // const allOptions: string[] = await page.locator('#ctx-menu li button').allInnerTexts();
    const allOptions: string[] = await page.locator('ul.context-menu-list span').allInnerTexts();

    console.log(allOptions);
    await page.waitForTimeout(2000);
    await page.locator('//li/button[@data-action="copy"]').first().click();

    let output = await page.locator('//div[@data-testid="ctx-output"]').innerText();
    console.log("------------Submission output is below-----------------")
    console.log(output);


});