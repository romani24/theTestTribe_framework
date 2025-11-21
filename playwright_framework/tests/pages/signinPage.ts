import { Locator, Page } from "@playwright/test";

export class SignInPage {
    readonly page: Page;
    readonly emailIdTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly signInButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.emailIdTextBox = this.page.locator('//input[placeholder="Email"]');
        this.passwordTextBox = this.page.locator('//input[placeholder="Password"]');
        this.signInButton = this.page.locator('//a[normalize-space()="Sign In"]');
    }

    async enterEmailId(emailId: string) {
        await this.emailIdTextBox.fill(emailId);
    }

    async enterPassword(password: string) {
        await this.passwordTextBox.fill(password);
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }
}