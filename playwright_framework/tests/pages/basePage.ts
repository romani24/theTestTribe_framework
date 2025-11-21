import { Locator, Page } from "@playwright/test";

export default class BasePage {
    
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async clickElement(element: Locator) {
        await element.click();
    }

    async fillFormField(element: Locator, value: string) {
        await element.type(value);
    }

    async getElementText(element: Locator): Promise<string> {
        return await element.innerText();
    }

    async waitForElementVisible(selector: string) {
        await this.page.waitForSelector(selector, { state: 'visible' });
    }

    async takeScreenshot(filename: string) {
        await this.page.screenshot({ path: filename });
    }

}