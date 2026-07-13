import { chromium } from "playwright";

async function mutpiTabTest() {

    let browser = await chromium.launch( {headless: false} );
    let context = await browser.newContext();

    // tab 1

    let page1 = await context.newPage();
    await page1.goto("https://app.vwo.com/#login");

    console.log("Tab 1: Dashboard");

    // tab 2

    let page2 = await context.newPage();
    await page2.goto("https://app.vwo.com/#login");

    console.log("Tab 2: Settings");
}

mutpiTabTest();