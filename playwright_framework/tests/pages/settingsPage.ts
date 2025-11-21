import { Locator, Page } from "@playwright/test";

export class SettingsPage {

    readonly page: Page;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutButton = this.page.locator("//button[normalize-space()='Logout']");
    }

    async clickLogoutButton() {
        await this.logoutButton.click();
    }

}