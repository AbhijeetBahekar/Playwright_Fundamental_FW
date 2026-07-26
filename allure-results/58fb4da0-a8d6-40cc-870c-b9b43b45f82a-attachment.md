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
  - waiting for locator('.oxd-table-cell').filter({ hasText: 'Terminated' }).first().locator('.oxd-table-cell').nth(2)

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
  20 |         row = page.locator(".oxd-table-cell").filter({ hasText: empStatus }).first();
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
  33 |     // these are also not working
  34 |     // const firstName = await row.first().getByRole('cell').nth(2).innerText();
  35 |     // const lastName = await row.first().getByRole('cell').nth(3).innerText();
  36 |     
> 37 |     // const firstName = await row.locator('.oxd-table-cell').nth(2).innerText();
     |                                                                   ^ Error: locator.innerText: Target page, context or browser has been closed
  38 |     // const lastName = await row.locator('.oxd-table-cell').nth(3).innerText();
  39 |     const firstName = await row.locator(".//preceding-sibling::div[2]").innerText();
  40 |     const firstName = await row.locator(".//preceding-sibling::div[3]").innerText();
  41 |     console.log(firstName, lastName)
  42 |     await page.waitForTimeout(5000);
  43 |     
  44 | 
  45 | 
  46 | 
  47 | })
```