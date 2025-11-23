import {test, expect} from '../fixture/pomFixtures';

test('Login Conduit test using Page Object Model', async ({page, landingPage, homePage, signInPage, settingsPage}) => {
    // Navigate to the application
    await page.goto('https://react-redux.realworld.io/');

    await landingPage.clickSignInButton();
    await signInPage.enterEmailId("playwrightdemo@gmail.com")
    await signInPage.enterPassword("playwrightdemo")
    await signInPage.clickSignInButton(); 
    await homePage.clickSettingsButton();
    await settingsPage.clickLogoutButton();
    await page.close();
});