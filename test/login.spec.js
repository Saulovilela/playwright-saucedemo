// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login_page');


test.describe('Teste de diferenciados Logins no Saucedemo', () => {

    test.beforeEach(async ({ page }) => {
        console.log('Abrindo a página de Login...');
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Login com credenciais válidas', async ({ page }) => {
        const loginPage = new LoginPage(page);

        console.log('Preenchendo formulário de login com usuario e senha válidas...');
        await loginPage.login('standard_user', 'secret_sauce');

        console.log('clica no Botão Login...')
        await loginPage.clicaLogin();

        console.log('Verifica se o elemento está visivel na pagina logada...');
        const texto = await loginPage.TextoVisivel('Products');
        expect(texto).toBe(true);
    });

    test('Login com credenciais inválidas', async ({ page }) => {
        const loginPage = new LoginPage(page);

        console.log('Preenchendo formulário de login com credenciais incorretas...');
        await loginPage.login('standard_user_error', 'secret_sauce_labs');

        console.log('clica no Botão Login...')
        await loginPage.clicaLogin();

        console.log('Verifica se a mensagem de erro aparece na tela...');
        const texto = await loginPage.TextoVisivel('Epic sadface: Username and password do not match any user in this service');
        expect(texto).toBe(true);
    });

    test('Login com usuário e senha em branco', async ({ page }) => {
        const loginPage = new LoginPage(page);

        console.log('Preenchendo formulário de login em branco...');
        await loginPage.login('', '');

        console.log('clica no Botão Login...')
        await loginPage.clicaLogin();

        await page.waitForTimeout(1000);

        console.log('Verifica se a mensagem de erro aparece na tela...');
        const texto = await loginPage.TextoVisivel('Epic sadface: Username is required');
        expect(texto).toBe(true);
    });

    test('Login com usuário bloqueado', async ({ page }) => {
        const loginPage = new LoginPage(page);

        console.log('Preenchendo formulário de login com usuario bloqueado...');
        await loginPage.login('locked_out_user', 'secret_sauce');

        console.log('clica no Botão Login...')
        await loginPage.clicaLogin();
        await page.waitForTimeout(1000);

        console.log('Verifica se a mensagem de usuario bloqueado aparece na tela...');
        const texto = await loginPage.TextoVisivel('Epic sadface: Sorry, this user has been locked out.');
        expect(texto).toBe(true);
    });
});
