import { test, expect } from "@playwright/test";

test('basic verify how to handle element', async ({ page }) => {


    await page.goto("https://awesomeqa.com/webtable.html");
    //table[@id="customers"]/tbody/tr[5]/td[2]
    const firstPart = "//table[@id='customers']/tbody/tr[";
    const secPart = "]/td[";
    const thirdPart = "]"

    const rows = await page.locator("//table[@id='customers']/tbody/tr").count();
    const cols = await page.locator("//table[@id='customers']/tbody/tr[2]/td").count();
    await page.pause();
    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const dynamicPath = `${firstPart}${i}${secPart}${j}${thirdPart}`;
            console.log(dynamicPath);
            const data = await page.locator(dynamicPath).innerText();
            console.log(data);
            if(data.includes('Helen Bennett')){
                const countryPath = `${dynamicPath}/following-sibling::td`;
                const countryText = await page.locator(countryPath).innerText();
                console.log('-------------------');
                console.log(`Helen Bennett is In - ${countryText}`);
            }
        }

    }

    

})