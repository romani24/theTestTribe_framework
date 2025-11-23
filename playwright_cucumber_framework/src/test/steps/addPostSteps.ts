import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page, expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

const articleName = "Playwrighr" + Math.random();

When('I Click on New Post button', async function () {
    await pageFixture.page.locator("a[href='#/editor']").click();
});

When('I fill up the require fields', async function () {
    await pageFixture.page.locator("input[placeholder='Article Title']").fill(articleName);
    await pageFixture.page.locator("input[placeholder=\"What's this article about?\"]").fill("This is a test article");
    await pageFixture.page.locator("textarea[placeholder='Write your article (in markdown)']").fill("This is the content of the test article.");
    await pageFixture.page.locator("input[placeholder='Enter tags']").fill(articleName);
});

When('I publish the article', async function () {
    await pageFixture.page.locator("button[type='button']").filter({ hasText: 'Publish Article' }).click();
});

Then('I should see the article published', async function () {
    const articleTitle = await pageFixture.page.locator("h1").textContent();
    expect(articleTitle).toBe(articleName);
});
