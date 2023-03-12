import '../../support/commands/addBoardApi'

describe('Boards functionality', () => {
    beforeEach(() => {
        cy.request('POST', '/reset');
        cy.intercept('POST', '**/api/boards').as('createBoard');
        cy.intercept('GET', '**/api/boards').as('boardList');
        cy.intercept('POST', '**/api/boards/*').as('boardInfo');
        cy.intercept('PATCH', '**/api/boards/*').as('boardUpdate');
        cy.intercept('DELETE', '**/api/boards/*').as('deleteBoard');
    });

    it('drag and drop task to another list', () => {
        
    });

});