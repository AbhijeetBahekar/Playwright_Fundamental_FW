import { test, expect } from "@playwright/test";

test('Verify element filter', async ({ page })=> {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const forgotPassLink = page.locator("a.list-group-item").filter({ hasText: "Forgotten Password"});
    await forgotPassLink.click();

    const accountLinks = page.locator('a.list-group-item');
    await expect(accountLinks).toHaveCount(13);

    const privacyLink = page.locator('footer a').filter({ hasText: "Privacy Policy"});
    await expect(privacyLink).toHaveAttribute('href', '#privacy-poilcy');
})