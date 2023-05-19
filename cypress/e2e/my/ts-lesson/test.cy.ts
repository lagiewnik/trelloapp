/// <reference types="cypress" />
import '../../../support/commands/addBoard'

it('creating a board', () => {
    cy.visit('/');
    //addBoard('Npwy bord TS');
    cy.addBoard("z custom comandsa");
    cy.visit('/');
});
