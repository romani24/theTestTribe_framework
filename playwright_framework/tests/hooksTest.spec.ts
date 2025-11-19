import { test,expect, Page } from '@playwright/test';     

let page: Page;
test.beforeEach(async({browser})=>{
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name','standard_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
})
test.afterEach(async()=>{
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
    await page.close()
})

test('Add Items and Check out test',async({})=>{
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('#checkout').click();
})


test('Add Items and remove from the Cart test',async({})=>{
    await page.locator('#add-to-cart-sauce-labs-bike-light').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('#remove-sauce-labs-bike-light').click();
});

// npx playwright test hooksTest.spec.ts --headed --project=chromium

/*
test.beforeAll(async()=>{
    console.log("This is before all hooks");
}) 

test.beforeEach(async({page})=>{
    console.log("This is before each hooks");
    await page.goto('https://www.saucedemo.com/');
})          

test('Test 1',async()=>{
    console.log("1");
})
test('Test 2',async()=>{
    console.log("2");
})

test.afterAll(async()=>{
    console.log("This is after all hooks");
})
test.afterEach(async()=>{
    console.log("This is after each hooks");
})          
*/
// npx playwright test hooksTest.spec.ts --headed --project=chromium