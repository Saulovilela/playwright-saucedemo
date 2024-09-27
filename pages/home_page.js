const { HomeElements } = require('../elements/home_elements');

class HomePage {
    constructor(page) {
        this.page = page;
        this.elements = new HomeElements();
    }

    async clicaMochila(){
        await this.page.click(this.elements.mochilaSauceLabs);
        await this.page.click(this.elements.btnAddCarrinho);
    }

    async clicaLanterna(){
        await this.page.click(this.elements.lanternaSauceLabs);
        await this.page.click(this.elements.btnAddCarrinho);
    }

    async clicaCarrinho(){
        await this.page.click(this.elements.btnCarrinho);
    }

    async clicaRemove(){
        await this.page.click(this.elements.removeItem);
    }

    async clicaCheckout(){
        await this.page.click(this.elements.btnCheckout);
    }

    async preencheNome(nome, sobrenome, cep){
        await this.page.fill(this.elements.inputPrimeiroNome, nome);
        await this.page.fill(this.elements.inputSobrenome, sobrenome);
        await this.page.fill(this.elements.inputCEP, cep);
        await this.page.click(this.elements.btnContinuar);
    }

    async clicaFinalizar(){
        await this.page.click(this.elements.btnFinalizar);
    }

    async clicaMenu(){
        await this.page.click(this.elements.btnHomeMenu);
    }

    async clicaFiltro(){
        await this.page.click(this.elements.btnFiltro);
    }

    async clicaLogout(){
        await this.page.click(this.elements.btnLogon);
    }
}

module.exports = { HomePage };
