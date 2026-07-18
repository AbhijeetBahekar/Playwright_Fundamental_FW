import { test, expect } from '@playwright/test';

test('verify our first TC', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/',

    );
});