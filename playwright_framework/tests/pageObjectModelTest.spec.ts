import {test, expect} from '@playwright/test';
import {LandingPage} from './pages/landingPage';
import {HomePage} from './pages/homePage';
import {SignInPage} from './pages/signinPage';
import {SettingsPage} from './pages/settingsPage';

test('Login Conduit test using Page Object Model', async ({page}) => {
    // Navigate to the application
    await page.goto('https://react-redux.realworld.io/');
    const landingPage = new LandingPage(page); 
    const signInButton = new SignInPage(page);
    const homePage = new HomePage(page);
    const settingsPage = new SettingsPage(page);

    await landingPage.clickSignInButton();
    await signInButton.enterEmailId("playwrightdemo@gmail.com")
    await signInButton.enterPassword("playwrightdemo")
    await signInButton.clickSignInButton(); 
    await homePage.clickSettingsButton();
    await settingsPage.clickLogoutButton();
    await page.close();
});