import { test, expect, Locator } from '@playwright/test';

test('Keyboard', async ({ page }) => {

    await page.goto('https://keycode.info');
    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' }); // this creates a A.png file in the root.

    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: 'ArrowLeft.png' });

    await page.keyboard.press('Shift+O');
    await page.screenshot({ path: 'O.png' });

    await page.keyboard.up('Shift');  // shift de-pressing with up
    await page.keyboard.down('Shift'); // shift pressing with down
    await page.screenshot({ path: 'shift.png' });


})