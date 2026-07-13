import { chromium } from "playwright";

async function multiUserTest() {

    let browser = await chromium.launch( {headless: false} );

    //admin
    let adminContext = await browser.newContext();
    let adminPage = await adminContext.newPage();

    await adminPage.goto("https://app.vwo.com/login");
    console.log("ADMIN: on Login page");

    // viewer
    let viewerContext = await browser.newContext();
    let viewPage = await viewerContext.newPage();

    await viewPage.goto("https://app.vwo.com/login");
    console.log("Viewer: on Login page");

    await adminContext.close();
    await viewerContext.close();
    await browser.close();    
}

multiUserTest();