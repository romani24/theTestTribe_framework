import {test as baseTest} from '@playwright/test';

import {LandingPage} from '../tests/pages/landingPage';
import {HomePage} from '../tests/pages/homePage';
import {SignInPage} from '../tests/pages/signinPage';
import {SettingsPage} from '../tests/pages/settingsPage';

type pages = {
    landingPage: LandingPage;
    signInPage: SignInPage;
    homePage: HomePage;
    settingsPage: SettingsPage;
}

const testPAges = baseTest.extend<pages>({
    landingPage: async ({page}, use) => {
        await use (new LandingPage(page));
    },

    signInPage: async ({page}, use) => {
        await use (new SignInPage(page));
    },
    homePage: async ({page}, use) => {
        await use (new HomePage(page));
    },
    settingsPage: async ({page}, use) => {
        await use (new SettingsPage(page));
    },
});

export const test = testPAges;
export const expect = testPAges.expect;


