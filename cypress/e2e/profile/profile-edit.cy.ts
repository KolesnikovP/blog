import { selectByTestId } from '../../helpers/selectByTestId';

let profileId = '';

describe('the user has visited the profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('User\'s profile successfully downloaded', () => {
        cy.get(selectByTestId('ProfileCard.firstname')).should('have.value', 'test');
    });
    it('User edits its profile', () => {
        const newName = 'new';
        const newLastname = 'lastname';
        cy.updateProfile(newName, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
