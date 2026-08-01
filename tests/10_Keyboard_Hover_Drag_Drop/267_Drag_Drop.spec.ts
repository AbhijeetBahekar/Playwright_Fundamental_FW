import { test, expect, FrameLocator, Locator } from '@playwright/test';

test('Drag and Drop', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const spot_a = await page.locator('#column-a');
    const spot_b = await page.locator('#column-b');
    
    await spot_a.dragTo(spot_b);
    await page.screenshot({ path: 'shift.png' });
    // await page.pause();

})