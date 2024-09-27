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
test.describe('Teste de compra no SauceDemo', () => {

    test('Comprar a mochila do Sauce Labs com sucesso', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Clicará na Mochila e Adicionará junto ao carrinho...');
        await homePage.clicaMochila();

        console.log('Verifica se o botão de remoção está visivel...')
        const removeButton = page.locator(homePage.elements.removeItem);
        await expect(removeButton).toBeVisible();

        console.log('Clica no icone Carrinho de compras...')
        await homePage.clicaCarrinho();

        console.log('Verifica se o botão "Checkout" está visível na página do carrinho...')
        const checkoutButton = page.locator(homePage.elements.btnCheckout);
        await expect(checkoutButton).toBeVisible();

        console.log('Clica no botão checkout...')
        await homePage.clicaCheckout();

        console.log('Preenche o formulário de informações de envio...')
        await homePage.preencheNome('Teste', 'Teste', '12345');

        console.log('Verifica se o botão "Finish" está visível após preencher as informações')
        const finishButton = page.locator(homePage.elements.btnFinalizar);
        await expect(finishButton).toBeVisible();

        console.log('Clica em finalizar...')
        await homePage.clicaFinalizar();

        console.log('Verifica se a mensagem de sucesso ocorre...')
        const successMessage = page.locator('text="Thank you for your order!"');
        await expect(successMessage).toBeVisible();
    });

    test('Adiciona Item ao carrinho e depois remove', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Clicará na Mochila e adicionará a mesma junto ao carrinho...');
        await homePage.clicaMochila();

        console.log('Verifica se o botão de remoção está visivel...')
        const removeButton = page.locator(homePage.elements.removeItem);
        await expect(removeButton).toBeVisible();

        console.log('Clica em remover item...')
        await homePage.clicaRemove();
    });

    test('Comprar a lanterna do Sauce Labs com sucesso', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Clicará na Lanterna e Adicionará junto ao carrinho...');
        await homePage.clicaLanterna();

        console.log('Verifica se o botão de remoção está visivel...')
        const removeButton = page.locator(homePage.elements.removeItem);
        await expect(removeButton).toBeVisible();

        console.log('Clica no icone Carrinho de compras...')
        await homePage.clicaCarrinho();

        console.log('Verifica se o botão "Checkout" está visível na página do carrinho...')
        const checkoutButton = page.locator(homePage.elements.btnCheckout);
        await expect(checkoutButton).toBeVisible();

        console.log('Clica no botão checkout...')
        await homePage.clicaCheckout();

        console.log('Preenche o formulário de informações de envio...')
        await homePage.preencheNome('Teste', 'Teste', '12345');

        console.log('Verifica se o botão "Finish" está visível após preencher as informações')
        const finishButton = page.locator(homePage.elements.btnFinalizar);
        await expect(finishButton).toBeVisible();

        console.log('Clica em finalizar...')
        await homePage.clicaFinalizar();

        console.log('Verifica se a mensagem de sucesso ocorre...')
        const successMessage = page.locator('text="Thank you for your order!"');
        await expect(successMessage).toBeVisible();
    });
});