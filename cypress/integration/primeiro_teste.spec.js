/// <reference types="cypress" />

context('validar Menus', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br'); 
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('clicando no link comprar deve direcionar para a página de compra', () => {
       cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar')
       cy.get('#primary-menu > .menu-item-629 > a').click();
       cy.contains('Produtos');

       cy.url().should('contain','http://lojaebac.ebaconline.art.br/shop/');

       //combinando ações
       cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar').and('have.attr', 'href')

       //should
       cy.get('.page-title').should('contain', 'Produtos')
    });

    it('clicando no link comprar deve direcionar para a página de login/cadastro', () => {
        cy.get('.icon-user-unfollow').click()
        cy.url().should('contain', '/my-account-2')

     });
});