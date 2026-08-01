import { test, expect, FrameLocator } from '@playwright/test';

test('Verify Web Test - Verify page title ', async ({ page })=> {
    await page.goto('https://app.thetestingacademy.com/playwright/frames/');
    
    // we have saved the framelocator in the variable vehicleFrame to jump on the frame
    // you need to import it.
    let vehicleFrame: FrameLocator = await page.frameLocator('#frame-one');


    await vehicleFrame.locator("#RESULT_TextField-1").fill('Hyundai i10'); // this is on iframe and not on page
    await vehicleFrame.locator("#RESULT_TextField-2").fill('Abhijeet Pune');
    await vehicleFrame.locator("#RESULT_TextField-3").fill('2012');
    await vehicleFrame.locator("#RESULT_RadioButton-1").selectOption('SUV');

    await vehicleFrame.getByText("Submit registration", { exact: true }).click();

    let output = await vehicleFrame.locator('#vehicle-output').innerText();
    console.log(output);
    // and if you want to do the operations on the page then use the page.locator as usual

    // await page.locator("Hi");

    await page.pause();



})