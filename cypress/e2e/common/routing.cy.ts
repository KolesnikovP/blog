import { selectByTestId } from '../../helpers/selectByTestId';

describe('routing', () => {
    describe('User NOT authorized', () => {
        it('go to the main page', () => {
            // we added base url
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('should get redirected when unauthorized user opens a profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('not existing route', () => {
            cy.visit('/profiledfasfsa');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('User authorized', () => {
        beforeEach(() => {
            cy.login();
        });

        it('should login and get to profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('should get to articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
