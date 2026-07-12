import { test, expect } from '@playwright/test';

test("Verify the title", async ({ page }) => {
    await page.goto("https://app.vwo.com");
    await expect(page).toHaveTitle("Login - Wingify");
    // page = fixture (injected by Playwright)

});

// run to KILL all the ghost browser
// taskkill /f /im chrome.exe /im msedge.exe /im node.exe