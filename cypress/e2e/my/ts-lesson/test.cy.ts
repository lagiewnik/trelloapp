/// <reference types="cypress" />

const addBoard = (input: string) => {
    cy.get('[data-cy="create-board"]').click();
    cy.get('[data-cy=new-board-input]').type(`${input}{enter}`);
};
it('creating a board', () => {
    cy.visit('/');
    addBoard('Npwy bord TS');
    cy.visit('/');
});
