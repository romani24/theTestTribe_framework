import { test, expect, Page } from '@playwright/test';

test.describe('Suite', () => {
    test('Test 1', async () => {
        console.log("1");
    })
    test('Test 2', async () => {
        console.log("2");
    })
})

test.beforeAll(async () => {
    console.log("DB conn setup");
})

test.beforeEach(async ({ page }) => {
    console.log("Clearing cookies");
})

test.afterEach(async () => {
    console.log("Cache Removal");
})

test.afterAll(async () => {
    console.log("DB conn disconnect");
})





