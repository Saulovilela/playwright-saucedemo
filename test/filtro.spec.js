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

test.describe('Testando o filtro da página Saucedemo', () => {

    test('Filtrando por preço A a Z', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Clicando no botão de filtro...');
        await homePage.clicaFiltro();

        console.log('Escolhe a opção de A a Z...');
        const filtroDropdown = page.locator('select[data-test="product-sort-container"]');

        console.log('Clica no dropdown para abrir as opções...')
        await filtroDropdown.click();

        console.log('Seleciona a opção Name (A to Z) pelo value...');
        await filtroDropdown.selectOption({ value: 'az' });

        console.log('Validação para verificar se o filtro foi aplicado corretamente...');
        const primeiroProduto = page.locator('.inventory_item_name').first();
        await expect(primeiroProduto).toHaveText('Sauce Labs Backpack');
    });

    test('Filtrando por preço Z a A', async ({ page }) => {
        const homePage = new HomePage(page);

        console.log('Clicando no botão de filtro...');
        await homePage.clicaFiltro();
        const filtroDropdown = page.locator('select[data-test="product-sort-container"]');

        console.log('Clica no dropdown para abrir as opções...')
        await filtroDropdown.click();

        console.log('Seleciona a opção Name (A to Z) pelo value...');
        await filtroDropdown.selectOption({ value: 'za' });

        console.log('Validação para verificar se o filtro foi aplicado corretamente...');
        const primeiroProduto = page.locator('.inventory_item_name').first();
        await expect(primeiroProduto).toHaveText('Test.allTheThings() T-Shirt (Red)');
    });

    test('Filtrando por preço mais baixo para mais alto', async ({ page }) => {
        const homePage = new HomePage(page);
    
        console.log('Clicando no botão de filtro...');
        await homePage.clicaFiltro();
    
        const filtroDropdown = page.locator('select[data-test="product-sort-container"]');
    
        console.log('Clica no dropdown para abrir as opções...');
        await filtroDropdown.click();
    
        console.log('Seleciona a opção de preço mais baixo para mais alto pelo value...');
        await filtroDropdown.selectOption({ value: 'lohi' });
    
        console.log('Validação para verificar se o filtro de preço foi aplicado corretamente...');
        const primeiroPreco = page.locator('div.inventory_item_price').first();
    
        console.log('Valida o preço do primeiro produto, incluindo o símbolo "$"')
        await expect(primeiroPreco).toHaveText('$7.99');
    });

    test('Filtrando por preço mais alto para mais baixo', async ({ page }) => {
        const homePage = new HomePage(page);
    
        console.log('Clicando no botão de filtro...');
        await homePage.clicaFiltro();
    
        const filtroDropdown = page.locator('select[data-test="product-sort-container"]');
    
        console.log('Clica no dropdown para abrir as opções...');
        await filtroDropdown.click();
    
        console.log('Seleciona a opção de preço mais alto para mais baixo pelo value...');
        await filtroDropdown.selectOption({ value: 'hilo' });
    
        console.log('Validação para verificar se o filtro de preço foi aplicado corretamente...');
        const primeiroPreco = page.locator('div.inventory_item_price').first();
    
        console.log('Valida o preço do primeiro produto, incluindo o símbolo "$"')
        await expect(primeiroPreco).toHaveText('$49.99');
    });
});