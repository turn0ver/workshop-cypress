/// <reference types="cypress" />

context('validar Carrinho de Compras', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br'); 
    });

    it('clicando no link comprar deve direcionar para a página de compra', () => {
       cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar')
       cy.get('#primary-menu > .menu-item-629 > a').click();
       cy.contains('Produtos');

       cy.url().should('contain','http://lojaebac.ebaconline.art.br/shop/');

       cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar').and('have.attr', 'href')

       cy.get('.page-title').should('contain', 'Produtos')
    });

    it('clicando no primeiro produto deve redirecionar para pagina do produto', () => {
        cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar')
        cy.get('#primary-menu > .menu-item-629 > a').click();
       cy.contains('Produtos');

        cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').contains('Hoodie')
        cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()

        cy.url().should('contain','http://lojaebac.ebaconline.art.br/product/abominable-hoodie/')

        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
     });
});