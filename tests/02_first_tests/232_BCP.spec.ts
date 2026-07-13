import { chromium, Browser, BrowserContext, Page } from "playwright";
// this will run it into error, this is just for learning!

async function run() {
    // LEVEL 1: Launch browser — heaviest operation, do it once
    let browser: Browser = await chromium.launch({ headless: false});
    // LEVEL 2: Create context — fresh session, isolated cookies
    let context1: BrowserContext = await browser.newContext();
    console.log('context created', context1);

    let context2: BrowserContext = await browser.newContext();
    console.log('context created', context2);  // multiple context

    // LEVEL 3: Open page — a tab inside the context
    let page1: Page = await context1.newPage();
    console.log("page opened", page1);

    // then we can work on the page

    await page1.goto("https://app.vwo.com");
    console.log("Title: ", await page1.title());

    // Cleanup - reverse oder
    await page1.close();
    await context1.close();
    await context2.close();
    await browser.close();    
}

// run(); // this will run it into error, this is just for learning!