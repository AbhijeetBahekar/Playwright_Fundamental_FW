import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Hovering test assignment', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');
    await page.getByTestId('nav-add-ons').hover();
    // await page.pause();

    const subMenu = await page.locator('//div[@aria-label="Add-ons submenu"]/a');
    // console.log(subMenu);

    const count = await subMenu.count();
    console.log(count);

    for (let i = 1; i < count; i++) {
        const item = subMenu.nth(i);

        const text = await item.innerText();
        console.log(`Submenu items are ${i + 1}: ${text}`);

        if (text.includes("Wi-Fi")) {
            await page.getByTestId('test-id-Wifi').click();
        }

    }

    let output = await page.locator('//div[@data-testid="hover-output"]').innerText();
    console.log("------------Submission output is below-----------------")
    console.log(output);

});