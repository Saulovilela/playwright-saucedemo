class HomeElements {
    get mochilaSauceLabs() {
        return 'text="Sauce Labs Backpack"';
    }

    get lanternaSauceLabs() {
        return 'text="Sauce Labs Bike Light"';
    }

    get btnAddCarrinho() {
        return '#add-to-cart';
    }

    get btnCarrinho() {
        return '.shopping_cart_link';
    }

    get removeItem() {
        return 'text="Remove"';
    }

    get btnCheckout() {
        return '#checkout';
    }

    get inputPrimeiroNome() {
        return '#first-name';
    }

    get inputSobrenome() {
        return '#last-name';
    }

    get inputCEP() {
        return '#postal-code';
    }

    get btnContinuar() {
        return '#continue';
    }

    get btnFinalizar() {
        return '#finish';
    }

    get btnHomeMenu(){
        return '#react-burger-menu-btn';
    }

    get optionLogout(){
        return '#logout_sidebar_link';
    }

    get btnFiltro(){
        return '.product_sort_container';
    }

    get btnLogon(){
        return '#logout_sidebar_link'
    }
}

module.exports = { HomeElements };
