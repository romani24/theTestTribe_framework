import { test,expect } from '@playwright/test';     

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

// npx playwright test hooksTest.spec.ts --headed --project=chromium