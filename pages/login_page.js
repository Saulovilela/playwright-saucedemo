// pages/login_page.js
const { LoginElements } = require('../elements/login_elements');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.elements = new LoginElements();
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        const { width, height } = await this.page.evaluate(() => {
            return { width: window.innerWidth, height: window.innerHeight };
        });
        await this.page.setViewportSize({ width, height });
    }

    async login(usuario, senha) {
        await this.page.fill(this.elements.usuarioInput, usuario);
        await this.page.press(this.elements.usuarioInput, 'Tab');
        await this.page.fill(this.elements.senhaInput, senha);
        //await this.page.click(this.elements.loginButton);
    }

    async clicaLogin(){
        await this.page.click(this.elements.loginButton);
    }

    async TextoVisivel(text) {
        const pageContent = await this.page.content();
        return pageContent.includes(text);
    }

}

module.exports = { LoginPage };
