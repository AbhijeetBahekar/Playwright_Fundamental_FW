# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\assignment.spec.ts >> Verify the terminated employee 
- Location: tests\07_WebTables\assignment.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="username"]')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import dotenv from "dotenv";
  3  | dotenv.config();
  4  | 
  5  | test('Verify the terminated employee ', async ({ page }) => {
  6  | 
  7  |     await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
  8  |     await page.waitForTimeout(2000);
  9  | 
> 10 |     await page.fill('input[name="username"]', process.env.ORANGE_USERNAME!);
     |                ^ Error: page.fill: Test timeout of 30000ms exceeded.
  11 |     await page.fill('input[name="password"]', process.env.ORANGE_PASSWORD!);
  12 |     await page.waitForTimeout(1500);
  13 |     const sub = await page.locator(".orangehrm-login-button");
  14 |     sub.click();
  15 |     await page.pause();
  16 | 
  17 |     let empStatus: string = "Terminated";
  18 |     let row;
  19 |     while (true) {
  20 |         row = page.locator(".oxd-table-row").filter({ hasText: empStatus });
  21 |         if (await row.count() > 0) {
  22 |             break;
  23 |         }
  24 |         const next = page.locator('.bi-chevron-right');
  25 |         if (await next.isDisabled()) throw new Error("Error - row not found");
  26 |         await next.click();
  27 |         await page.waitForTimeout(1000); 
  28 |     }
  29 | 
  30 |     // below 2 comments are erronous 
  31 |     // const firstName = await row.locator("//div[@role='cell'][div[text()='Terminated']]/preceding-sibling::div[3]").innerText();
  32 |     // const lastName = await row.locator("//div[@role='cell'][div[text()='Terminated']]/preceding-sibling::div[2]").innerText();
  33 |     
  34 |     const firstName = await row.first().getByRole('cell').nth(2).innerText();
  35 |     const lastName = await row.first().getByRole('cell').nth(3).innerText();
  36 |     console.log(firstName, lastName)
  37 |     await page.waitForTimeout(5000);
  38 |     
  39 | 
  40 | 
  41 | 
  42 | })
```