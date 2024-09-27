const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/home_page');
const { LoginPage } = require('../pages/login_page');

test.beforeEach(async ({ page }) => {

    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');

    console.log('clica no Botão Login...')
    await loginPage.clicaLogin();
    await page.waitForTimeout(1000);
});

test.describe('Teste de logout', () => {

    test('Fazendo Logout...', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Clicando no menu...');
        await homePage.clicaMochila();
        await homePage.clicaMenu();

        console.log('Verifica se o botão de logout está visivel...');
        const logout = page.locator(homePage.elements.btnLogon);
        await expect(logout).toBeVisible();
        console.log('Clica na opção Logout...');
        await homePage.clicaLogout();
    });
});




