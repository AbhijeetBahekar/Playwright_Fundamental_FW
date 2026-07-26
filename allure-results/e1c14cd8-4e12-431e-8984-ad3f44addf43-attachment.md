# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\assignment.spec.ts >> Verify the terminated employee 
- Location: tests\07_WebTables\assignment.spec.ts:5:5

# Error details

```
Error: locator.innerText: Target page, context or browser has been closed
Call log:
  - waiting for locator('.oxd-table-cell').filter({ hasText: 'Terminated' }).locator('//div[@role=\'cell\'][div[text()=\'Terminated\']]/preceding-sibling::div[3]')

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
  10 |     await page.fill('input[name="username"]', process.env.ORANGE_USERNAME!);
  11 |     await page.fill('input[name="password"]', process.env.ORANGE_PASSWORD!);
  12 |     await page.waitForTimeout(1500);
  13 |     const sub = await page.locator(".orangehrm-login-button");
  14 |     sub.click();
  15 |     await page.pause();
  16 | 
  17 |     let empStatus: string = "Terminated";
  18 |     let row;
  19 |     while (true) {
  20 |         row = page.locator('.oxd-table-cell').filter({ hasText: empStatus });
  21 |         if (await row.count()) {
  22 |             break;
  23 |         }
  24 |         const next = page.locator('.bi-chevron-right');
  25 |         if (await next.isDisabled()) throw new Error("Error - row not found");
  26 |         await next.click();
  27 |     }
  28 | 
> 29 |     const firstName = await row.locator("//div[@role='cell'][div[text()='Terminated']]/preceding-sibling::div[3]").innerText();
     |                                                                                                                    ^ Error: locator.innerText: Target page, context or browser has been closed
  30 |     const lastName = await row.locator("//div[@role='cell'][div[text()='Terminated']]/preceding-sibling::div[2]").innerText();
  31 |     console.log(firstName, lastName)
  32 |     await page.waitForTimeout(5000);
  33 |     
  34 | 
  35 | 
  36 | 
  37 | })
```