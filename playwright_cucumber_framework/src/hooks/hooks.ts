import { After, AfterAll, Before, Status } from "@cucumber/cucumber";
import {Browser, Page, expect, chromium} from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser:Browser;
let page:Page;

Before(async function() {
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    pageFixture.page = page;
})

After(async function() {
    // Screenshot on failure
    if (this.result?.status === Status.FAILED) {
        const image = await page.screenshot({ path: `./test-result/screenshots/failure-${Date.now()}.png`, fullPage: true });
        this.attach(image, 'image/png');
    }
    await page.close();
    await browser.close();
})

AfterAll(async function() {
    await browser.close();
})