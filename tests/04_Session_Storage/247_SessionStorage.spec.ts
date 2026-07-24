import { chromium } from "playwright";
import dotenv from "dotenv";

// Load environment variables from .env (gitignored — never hardcode credentials).
// Copy .env.example -> .env and fill in your own VWO login before running this.
dotenv.config();

async function saveSession() {
    let browser = await chromium.launch( {headless: false} );
    let context = await browser.newContext();
    let page    = await context.newPage();

    await page.goto("https://app.wingify.com/#/login");
    await page.waitForTimeout(2000);
    
    await page.fill("#login-username", process.env.VWO_USERNAME!);
    await page.fill("#login-password", process.env.VWO_PASSWORD!);
    await page.waitForTimeout(1500);

    await page.click("#js-login-btn");

    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    await page.waitForTimeout(3000);

    await context.storageState({ path: "./user-session.json"});
    console.log("Session saved to user-session.json");

    await page.waitForTimeout(2000);
    await browser.close();
}

saveSession();