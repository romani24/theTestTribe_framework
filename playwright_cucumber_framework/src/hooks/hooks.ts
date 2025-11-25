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
    await page.close();
    await browser.close();
})

AfterAll(async function() {
    await browser.close();
})