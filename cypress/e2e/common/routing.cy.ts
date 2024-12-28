describe('routing', () => {
    it('go to the main page', () => {
        // we added base url
        cy.visit('/');
        cy.get('[data-testid=MainPage]').should('exist');
    });
});
