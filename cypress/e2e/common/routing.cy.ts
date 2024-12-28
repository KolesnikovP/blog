describe('routing', () => {
    describe('User NOT authorized', () => {
        it('go to the main page', () => {
            // we added base url
            cy.visit('/');
            cy.get('[data-testid=MainPage]').should('exist');
        });
        it('should get redirected when unauthorized user opens a profile page', () => {
            cy.visit('/profile/1');
            cy.get('[data-testid=MainPage]').should('exist');
        });
        it('not existing route', () => {
            cy.visit('/profiledfasfsa');
            cy.get('[data-testid=NotFoundPage]').should('exist');
        });
    });

    describe('User authorized', () => {

    });
});
