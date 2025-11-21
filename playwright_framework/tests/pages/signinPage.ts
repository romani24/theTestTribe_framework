import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";  


export class SignInPage extends BasePage {
    readonly page: Page;
    readonly emailIdTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly signInButton: Locator;
    

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.emailIdTextBox = this.page.locator("//input[@placeholder='Email']");
        this.passwordTextBox = this.page.locator("//input[@placeholder='Password']");
        this.signInButton = this.page.locator("button[type='submit']");
    }

    async enterEmailId(emailId: string) {
        await this.fillFormField(this.emailIdTextBox, emailId);
    }

    async enterPassword(password: string) {
        await this.fillFormField(this.passwordTextBox, password);
    }

    async clickSignInButton() {
        await this.clickElement(this.signInButton);
    }
}