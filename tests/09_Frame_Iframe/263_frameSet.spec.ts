import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Basic Web Test - Verify page title ', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

    let mainFrame: FrameLocator = await page.frameLocator('[name="main"]');
    const headerText = await mainFrame.locator('h2').innerText();
    console.log(headerText);

    const allFrame: Locator[] = await page.locator('//frame').all();
    console.log('Total number of frames: '+ allFrame.length);

    for (const frame of allFrame){
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
    }

    let sideFrame: FrameLocator = await page.frameLocator('[name="side"]');
    await sideFrame.getByTestId('side-link-registration').click();
    await page.pause();
    
})
