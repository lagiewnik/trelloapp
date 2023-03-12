describe('Boards testing', () => {
    beforeEach(() => {
        cy.request('POST', '/reset');

        cy.addBoardApi('new board for stars');
    });

    it('starring the board', () => {
        // not working
        cy.visit('/');

        cy.log('Board created');
        cy.get('[data-cy="board-item"]')
            .should('be.visible')
            .should('have.length', 1);

        cy.log('click on star button')
            .get('.board_item')
            .realHover()
            .get('.Star')
            .click();
    });
});
